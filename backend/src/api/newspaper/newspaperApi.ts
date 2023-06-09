import { Request, Response } from "express";
import { ValidationError, number } from "yup";
import {
    newspaperById,
    newspaperPublisherRequest,
} from "../../models/newspaper";
import { Newspaper } from "@prisma/client";
import { NewspaperWithCopies } from "../../types/newspaper.types";
import { db } from "../../utils/db.server";
import multer from 'multer';
import path from 'path';
import {unlink} from 'node:fs'

const getAllNewspaper = async (req: Request, res: Response) => {
    try {
        const newspapers = await db.newspaper.findMany({
            include: {
                publisher: {
                  select: {
                    name: true
                  }
                }
              }
            })
        if (!newspapers){
            res.status(200).json([]);
        }
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

const getNewspapersByIdInverval = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const from: string = req.params.from;
    const to: string = req.params.to;
    let fromDate: Date | undefined;
    let toDate: Date | undefined;

    // This is an error protection - we make sure we accept all JS supported date formats
    // if the string isn't supported, it will be undefined and we will return all newspaper copies
    // without date being a factor

    if (Date.parse(from)) {
        fromDate = new Date(from);
    }

    if (Date.parse(to)) {
        toDate = new Date(to);
    }

    try {
        const newspaper: NewspaperWithCopies | null = await db.newspaper.findFirst({
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
                },
            },
        });

        if (!newspaper) {
            res.status(200).json([]);
            return;
        }

        res.status(200).json({ item: newspaper, message: "Newspaper found." });
    } catch (e) {

        res.status(500).json([]);
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
                cb(null, 'images', )  // ../images doesn't work for whatever reason???
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

        const upload = multer({storage: storage, fileFilter: function (req, file, callback) {
            var ext = path.extname(file.originalname);
            if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                return callback(Error("Can only upload images!"));

            }
            callback(null, true);
        }, limits: {
            fileSize: 1024 * 1024 * 4, // 4MB
        }
        });
    
        // check if newspapers exist
        try{ 
            const newspaper: Newspaper | null = await transaction.newspaper.findFirst({
                where: {
                    id: req.params.newspaperId
                },
            })
    
            if (!newspaper){
                res.status(400).json({message: "Newspaper with specified id doesn't exist."})
                return
            }
    
        } catch (e) {
            res.status(500)
            .json({message: "Upload unsuccessful", error: e})
            return
        }

        const up = upload.single('up');

        up(req, res, (err) => {
            if (err) {
                res.status(500).json({message: "Upload unsuccessful", error: err});
                return err;
            }
            res.status(200).json({message: "Upload successful"});
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
                published: false },
        });
        res.status(200).json({ items: copies, message: "Fetched " + copies.length + " copies to publish.", data: user?.username });
    }
    catch (e) {
        res.status(500).json([])
    }
}

const getNewspaperCopies = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;

        const newspaper = await db.newspaper.findFirst({
            where: { id, },
            select: {
                id: true,
                newspaperCopies: {
                    select: {
                        date: true,
                    }
                }
            }
        });
        res.status(200).json({ items: newspaper, message: "Fetched " });
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
    getNewspaperCopies,
};
