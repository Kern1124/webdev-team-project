import { Request, Response } from "express";
import { ValidationError } from "yup";
import { ArticleCreateSchema } from "../../models/article";
import { ArticleCreateData } from "../../types/article.types";
import createArticle from "../../repositories/article/create"
import { ArticleWithAuthor, ArticleWithCategories } from "../../types/article.types";
import { db } from "../../utils/db.server";
import { Article } from "@prisma/client";
import { RoleRecordTypeEnumeration } from "../../models/role";


/*
import { userLoginSchema, userRegistrationSchema } from "../../models/user.ts";
import type { UserLoginData, UserRegisterData, UserWithRoles } from "./user.types.ts";

import * as ArticleService from "./article.service.ts"
import { ValidationError } from "yup";
 */


// This serves just as a test route to see if the server is working
// We would not like to do it this way
// I think it would be better to separate /login /logout / register from user
// and then probably make a hierarchy user / :id / article / :id atd...

const getCopyArticles = async (req: Request, res: Response) => {
    try {

        const newspaperCopyId: string = req.params.newspaperCopyId;
        const content: string = req.params.content;

        const articles: Article[] = await db.article.findMany({
            where: {
                AND: [
                    {
                        newspaperCopyId: newspaperCopyId,
                        contents: {
                            contains: content
                        }
                    },

                ],
            }
        })

        res.status(200).json({ items: articles, message: "Fetched " + articles.length + " articles.", data: newspaperCopyId })

    } catch (e) {

        res.status(500).json({ message: "Internal error.", error: e })
    }
}

// TODO assigning to newspaper copies?
const getUnapprovedArticles = async (req: Request, res: Response) => {
    try {
        const user = req.session.user;
        const articles = await db.article.findMany({
            where: { approved: false },
            //        include: { author: true } /in case we would ban users
        });
        res.status(200).json({ items: articles, message: "Fetched " + articles.length + " articles to approve.", data: user?.username });
    }
    catch (e) {
        res.status(500).json({ message: "Internal error.", error: e })
    }
}

const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await db.category.findMany({
            select: {
                id: true,
                name: true,
            }
        });
        res.status(200).json({ items: categories, message: "Fetched " + categories.length + " categories." });
    }
    catch (e) {
        res.status(500).json({ message: "Internal error.", error: e })
    }
}

const getGlobalArticlesByHeading = async (req: Request, res: Response) => {
    try {
        const heading = req.params.heading;
        const newspapers = await db.newspaper.findMany({
            include: {
                newspaperCopies: {
                    include: {
                        articles: {
                            where: {
                                heading: {
                                    contains: heading
                                }
                            }
                        }
                    }
                }
            },
            where: {
                newspaperCopies: {
                    some: {
                        articles: {
                            some: {
                                heading: {
                                    contains: heading
                                }
                            }
                        }
                    }
                }
            }
        });
        res.status(200).json({ items: newspapers, message: "Fetched " + newspapers.length + " newspapers." });
    } catch (e) {
        res.status(500).json({ message: "Internal error.", error: e })
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const authorId = req.session.user?.id
        if (!authorId) {
            res.status(400).json({ message: "Unauthorized request" })
            return
        }

        // Purifying
        const sanitizeHtml = require('sanitize-html');
        const unpurified = req.body.contents;
        const contents = sanitizeHtml(unpurified);
        
        if (contents.length === 0) {
          res.status(400).json({ message: "No allowed content" });
          return;
        }

        const validatedData = await ArticleCreateSchema.validate({ ...req.body, contents });
        const result = await createArticle({ ...validatedData, authorId } as ArticleCreateData)
        if (result.isOk) {
            res.status(200).json({ items: result.value, message: "Article created." });
            return
        }
        res.status(400).json({ items: result.error, message: `Article failed to create on ${result.error.message}.` });

    } catch (e) {
        if (e instanceof ValidationError) {
            res.status(400).json({ message: e.message });
            return;
        }
        res.status(500).json({ message: "Internal error.", error: (e as Error).message })
    }
}

const getAll = async (req: Request, res: Response) => {
    try {
        const articles = await db.article.findMany();
        res.status(200).json({ items: articles, message: "Fetched " + articles.length + " articles." });
    }
    catch (e) {
        res.status(500).json({ message: "Internal error.", error: e })
    }
}

const getArticleWithId = async (req: Request, res: Response) => {
    try {
        const article: ArticleWithAuthor | null = await db.article.findFirst({
            where: {
                id: req.params.articleId,
            },
            select: {
                author: {
                    select: {
                        username: true
                    }
                },
                contents: true,
                heading: true,
                comments: true,
            }
        })

        if (!article) {
            res.status(400).json({ message: "Article with id " + req.params.articleId + " doesn't exist" })
            return
        }

        res.status(200).json({ item: article, message: "Article fetched." })
    } catch (e) {
        res.status(500).json({ message: "Something went wrong.", error: e })
    }
}

const getRelatedArticles = async (req: Request, res: Response) => {
    try {
        return await db.$transaction(async (transaction) => {
            const article: ArticleWithCategories | null = await transaction.article.findFirst({
                where: {
                    id: req.params.articleId
                },
                include: {
                    categories: {
                        select: {
                            name: true
                        }
                    }
                }
            })
            if (!article) {
                res.status(404).json({ message: "Article with the specified id doesn't exist" })
                return
            }

            const categories: string[] = article.categories.map((category) => (category.name))
            console.log(categories);
            console.log(categories);

            const related = await transaction.article.findMany({
                where: {
                    heading: {
                        not: article.heading
                    },
                    categories: {
                        some: {
                            name: {
                                in: categories
                            }
                        }
                    }
                },
                select: {
                    categories: true,
                    heading: true,
                    id: true,
                    approved: true
                }
            })
            res.status(200).json({ item: related });
        })
    } catch (e) {
        res.status(500).json({ message: "Something went wrong", error: e })
    }
}
const validateDirectorRole =  async (req: Request, res: Response) => {
  
}
const approve = async (req: Request, res: Response) => {
    try {
        ///DUPLICATED
        const id = req.params.id
        const relatedCopy = await db.newspaper_copy.findFirst({
          where: {
            id,
          },
          select: {
            newspaperId: true,
            newspaper: {
              select: {
                name: true,
              }
            }
          }
        })
        if (!relatedCopy) {
          res.status(400).json({ message: 'Invalid copy' });
          return
        }
        const newspaperId = relatedCopy.newspaperId
        if (!(req.session.user?.userRoles.filter(role => role.newspaperId === newspaperId).some(role => role.name === RoleRecordTypeEnumeration[0]))) {
          res.status(400).json({ message: `Cannot perform operation. You need to be at least ${RoleRecordTypeEnumeration[0]} in ${relatedCopy.newspaper.name}` });
          return
        }
        ///
        const copy = await db.newspaper_copy.update({
            where: {
                id,
            },
            data: {
                published: true,
                date: new Date().toISOString()
            }
        })
        res.status(200).json({ item: copy, message: 'Copy succesfully approved.' });
      } catch (e) {
        res.status(500).json({ message: "Something went wrong", error: e })
      }
    
}

const discard = async (req: Request, res: Response) => {
    try {
        ///DUPLICATED
        const id = req.params.id
        const relatedCopy = await db.newspaper_copy.findFirst({
          where: {
            id,
          },
          select: {
            newspaperId: true,
            newspaper: {
              select: {
                name: true,
              }
            }
          }
        })
        if (!relatedCopy) {
          res.status(400).json({ message: 'Invalid copy' });
          return
        }
        const newspaperId = relatedCopy.newspaperId
        if (!(req.session.user?.userRoles.filter(role => role.newspaperId === newspaperId).some(role => role.name === RoleRecordTypeEnumeration[0]))) {
          res.status(400).json({ message: `Cannot perform operation. You need to be at least ${RoleRecordTypeEnumeration[0]} in ${relatedCopy.newspaper.name}` });
          return
        }
        
        ///
        // change time
        const copy = await db.newspaper_copy.delete({
            where: {
                id,
            }
        })
        res.status(200).json({ item: copy, message: 'Copy succesfully approved.' });
      } catch (e) {
        res.status(500).json({ message: "Something went wrong", error: e })
      }
}

export const copyApi = {
    approve,
    discard,
}