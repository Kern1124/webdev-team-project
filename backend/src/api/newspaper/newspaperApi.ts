import { Request, Response } from "express";
import { ValidationError, number } from "yup";
import {
  newspaperById,
  newspaperPublisherRequest,
} from "../../models/newspaper";
import { Newspaper, Newspaper_copy, Role, User } from "@prisma/client";
import { NewspaperWithCopies, NewspaperWithCopiesAndRolePermission, NewspaperWithCopiesArticles } from "../../types/newspaper.types";
import { db } from "../../utils/db.server";
import multer from 'multer';
import path from 'path';
import { unlink } from 'node:fs'
import { RoleRecordTypeEnumeration } from "../../models/role";
import { CopyArticlesSchema } from "../../models/article";
import { Result } from "@badrap/result";

const getAllNewspaper = async (req: Request, res: Response) => {
  try {
    let newspapers = await db.newspaper.findMany({
      include: {
        publisher: {
          select: {
            name: true
          }
        }
      }
    })
    
    const user = req.session.user
    newspapers = newspapers.map((newspaper) => {
      const isEditable = user?.userRoles.some(
        (role) =>
          role.name === RoleRecordTypeEnumeration[0] &&
          newspaper.id === role.newspaperId
      );
    
      return {
        ...newspaper,
        isEditable
      };
    });
    res.status(200).json({ item: newspapers, message: "Fetched " + newspapers.length + " newspapers." });
  } catch (e) {
    res.status(500).json([]);
  }
}

// V požadavku je záslán title newspaper a publisher name
// -> server vyfiltruje odpovídající newspapers a pošle je
// (filtrování normálně přes string contains substring).
// Ať se neposílá moc dat, tak by tenhle endpoint měl poslat jen jméno a id newspaperu,
// případně jestli v databází bude mít nějaký podnázev.

const getNewspaperByPublisher = async (req: Request, res: Response) => {
  try {
    const publisherId: string = req.params.publisherId;
    const title: string = req.params.title;

    const newspapers: Newspaper[] = await db.newspaper.findMany({
      where: {
        AND: [
          {
            publisher: {
              id: publisherId,
            },
            name: {
              contains: title,
            },
          },
        ],
      },
    });

    if (newspapers.length == 0) {
      res
        .status(200)
        .json([]);
      return;
    }

    res
      .status(200)
      .json({
        item: newspapers,
        message: "Found " + newspapers.length + " entries.",
      });
  } catch (e) {
    res.status(500).json([]);
  }
};

// V požadavku je zasláno id newspaperu a datum od-do ->
// server pošle daný newspaper spolu s jeho newspaper copies,
// opět bude stačit short info (název, id a datum).
// Vyfiltruje jeho newspaper copies podle data, pokud je datum
// null tak se pošlou všechny newspaper copies.

const getNewspapersByIdInverval = async (id: string, from: string, to: string) => {
  let fromDate: Date | undefined;
  let toDate: Date | undefined;

  // This is an error protection - we make sure we accept all JS supported date formats
  // if the string isn't supported, it will be undefined and we will return all newspaper copies
  // without date being a factor

  if (Date.parse(from)) {
    fromDate = new Date(from);
    fromDate.setHours(0, 0, 0, 0);

  }

  if (Date.parse(to)) {
    toDate = new Date(to);
    toDate.setHours(23, 59, 59, 999);
  }

  try {
    const newspaper: NewspaperWithCopiesArticles | null = await db.newspaper.findFirst({
      where: {
        id: id,
      },
      include: {
        newspaperCopies: {
          where: {
            AND: [
              {
                date: {
                  lte: toDate,
                  gte: fromDate,
                },
              },
            ],
          },
          include: {
            articles: {
              select: {
                id: true,
                authorId: true,
                heading: true,
                approved: true,
                categories: true,
              },
            }
          },
          orderBy: {
            date: 'desc'
          }
        },
      },
    });
    return Result.ok(newspaper)
  } catch (e) {
    return Result.err(e as Error)
  }
};

const getUnpublishedCopies = async (req: Request, res: Response) => {
  try {
    const user = req.session.user;
    const copies = await db.newspaper_copy.findMany({
      where: { published: false },
    });
    res.status(200).json({ items: copies, message: "Fetched " + copies.length + " copies to publish.", data: user?.username });
  }
  catch (e) {
    res.status(500).json([])
  }
}

const updateImage = async (req: Request, res: Response) => {

  await db.$transaction(async transaction => {

    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'public/images',)  // ../images doesn't work for whatever reason???
      },
      filename: async (req, file, cb) => {
        const newName = Date.now() + path.extname(file.originalname);

        await db.newspaper.update({
          where: {
            id: req.params.newspaperId
          },
          data: {
            newspaperImg: "images/" + newName //perhaps ../images?
          }
        })
        cb(null, newName);
      },
    });

    const upload = multer({
      storage: storage, fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
          return callback(Error("Can only upload images!"));
        }
        callback(null, true);
      }, limits: {
        fileSize: 1024 * 1024 * 4, // 4MB
      }
    });

    // check if newspapers exist
    try {
      const newspaper: Newspaper | null = await transaction.newspaper.findFirst({
        where: {
          id: req.params.newspaperId
        },
      })

      if (!newspaper) {
        res.status(400).json({ message: "Newspaper with specified id doesn't exist." })
        return
      }

    } catch (e) {
      res.status(500)
        .json({ message: "Upload unsuccessful", error: e })
      return
    }

    const up = upload.single('up');

    up(req, res, (err) => {
      if (err) {
        res.status(500).json({ message: "Upload unsuccessful - " + err.message });
        return err;
      }
      res.status(200).json({ message: "Upload successful" });
    });
  })
}

const getUnpublishedNewspaperCopies = async (req: Request, res: Response) => {
  try {
    const user = req.session.user;
    const newspaperId = req.params.id

    const copies = await db.newspaper_copy.findMany({
      where: {
        newspaperId,
        published: false
      },
    });
    res.status(200).json({ items: copies, message: "Fetched " + copies.length + " copies to publish.", data: user?.username });
  }
  catch (e) {
    res.status(500).json([])
  }
}

// well this function returns all filtered copies and articles and if you have role, also if approvable publishable
const getNewspaperByIntervalHeadingRoles = async (req: Request, res: Response) => {
  try {
    return await db.$transaction(async (db) => {
      const id: string = req.params.id;
      const from: string = req.params.from;
      const to: string = req.params.to;
      const headingPart: string = req.params.heading
      const user = req.session.user
      const copies = await getNewspapersByIdInverval(id, from, to)
      if (copies.isErr) {
        return res.status(500).json({ message: "Internal error" })
      }
      let newspaper = copies.value
      if (!newspaper) {
        return res.status(400).json({ message: "Invalid newspaper!" })
      }
      newspaper.newspaperCopies = newspaper.newspaperCopies
        .map((copy) => ({
          ...copy,
          articles: copy.articles.filter((article) =>
            article.heading.toLowerCase().includes(headingPart.toLowerCase())
          ),
        }))
        .filter((copy) => !copy.published || copy.articles.length > 0);
        // for role get result
      const result = getResultForRoles(newspaper, user?.userRoles)
      if (result.isErr) {
        return res.status(500).json({ message: "Internal error!" })
      }
      return res.status(200).json(result.value)

    })
  }
  catch (e) {
    res.status(500).json([])
  }
}

const getResultForRoles = (newspaper: NewspaperWithCopiesArticles, roles: Role[] | undefined) => {
  // newspaper with filtered copies and articles
  try {
    if (!roles || !(roles.some(role => role.newspaperId === newspaper.id && (role.name === RoleRecordTypeEnumeration[1] || role.name === RoleRecordTypeEnumeration[0])))) {
      // filter published and approved
      newspaper.newspaperCopies
      const basicUser = {
        ...newspaper,
        newspaperCopies: newspaper.newspaperCopies
          .filter((copy) => copy.published === true)
          .map((copy) => ({
            ...copy,
            articles: copy.articles.filter((article) => article.approved === true),
          })),
      };
      return Result.ok(basicUser)
    }

    let response: NewspaperWithCopiesAndRolePermission = {
      ...newspaper,
      newspaperCopies: newspaper?.newspaperCopies.map((copy) => ({
        ...copy,
        isPublishable: false,
        articles: copy.articles.map((article) => ({
          id: article.id,
          approved: article.approved,
          authorId: article.authorId,
          heading: article.heading,
          categories: article.categories,
          isApprovable: false,
        })),
      })),
    };


    // Manager
    if (roles.some(role => role.newspaperId === newspaper.id && role.name === RoleRecordTypeEnumeration[1])) {
      response = {
        ...response,
        newspaperCopies: response.newspaperCopies.map((copy) => ({
          ...copy,
          articles: copy.articles.map((article) => ({
            ...article,
            isApprovable: !article.approved,
          })),
        }))
      }
    }
    // Director
    if (roles.some(role => role.newspaperId === newspaper.id && role.name === RoleRecordTypeEnumeration[0])) {
      response = {
        ...response,
        newspaperCopies: response.newspaperCopies.map((copy) => ({
          ...copy,
          isPublishable: !copy.published,
        }))
      }
    }

    return Result.ok(response)
  }
  catch (e) {
    return Result.err(e as Error)
  }
}
const getNewspapersByIdInvervalRoles = async (req: Request, res: Response) => {
  try {
    return await db.$transaction(async (db) => {
      const id: string = req.params.id;
      const from: string = req.params.from;
      const to: string = req.params.to;
      const user = req.session.user
      const copies = await getNewspapersByIdInverval(id, from, to)
      if (copies.isErr) {
        return res.status(500).json({ message: "Internal error" })
      }
      const newspaper = copies.value
      if (!newspaper) {
        return res.status(400).json({ message: "Invalid newspaper!" })
      }
      // for role get result
      const result = getResultForRoles(newspaper, user?.userRoles)
      if (result.isErr) {
        return res.status(500).json({ message: "Internal error!" })
      }
      return res.status(200).json(result.value)

    })
  }
  catch (e) {
    res.status(500).json([])
  }
}
export const newspaperApi = {
  getAllNewspaper,
  getNewspaperByPublisher,
  getNewspapersByIdInverval,
  getUnpublishedCopies,
  updateImage,
  getUnpublishedNewspaperCopies,
  getNewspaperByIntervalHeadingRoles,
  getNewspapersByIdInvervalRoles,
};
