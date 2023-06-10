import { Request, Response } from "express";
import { ValidationError } from "yup";
import auth from '../../middleware/authMiddleware';
import { ArticleCreateSchema, CopyArticlesSchema } from "../../models/article";
import { ArticleCreateData, CopyArticlesData } from "../../types/article.types";
import createArticle from "../../repositories/article/create"
import { db } from "../../utils/db.server";
import { Article } from "@prisma/client";
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
            if (!authorId){
                res.status(400).json({ message: "Unauthorized request" })
                return
            }
        const validatedData = await ArticleCreateSchema.validate(req.body);
        const result = await createArticle({ ...validatedData, authorId } as ArticleCreateData)
        if (result.isOk){
            res.status(200).json({ items: result.value, message: "Article created." });
            return
        }
        res.status(400).json({ items: result.error , message: `Article failed to create on ${result.error.message}.` });

    } catch (e) {
        if (e instanceof ValidationError) {
            res.status(400).json({ message: e.message });
            return;
        }
        res.status(500).json({ message: "Internal error.", error: e })
    }
}
export const articleApi = {
    getCopyArticles,
    getUnapprovedArticles,
    getCategories,
    getGlobalArticlesByHeading,
    create,
}