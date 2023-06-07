import { Request, Response } from "express";
import { ValidationError } from "yup";
import auth from '../../middleware/authMiddleware';
import { CopyArticlesSchema } from "../../models/article";
import { CopyArticlesData } from "../../types/article.types";
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

export const getCopyArticles =  async (req: Request, res: Response) => {
    try{
        const validatedData = await CopyArticlesSchema.validate(req.body);
        const articleData = validatedData as CopyArticlesData;

        const articles: Article[] = await db.article.findMany({
            where: {
                OR: [
                    {
                        newspaperCopyId: articleData.newspaperCopyId,
                    }
                ],
                contents: {
                    contains: articleData.content
                }
            }
        })

        res.status(200).json({items: articles, message: "Fetched " + articles.length + " articles."})

    } catch (e) {
        if (e instanceof ValidationError){
            res.status(400).json({message: e.message})
            return
        }

        res.status(500).json({message: "Internal error.", error: e})
    }
}


/*
articleRouter.get('/protected-admin', auth('MANAGER'), (req, res) => {
    res.json({ message: `This route has authentication and authorization, body: ${JSON.stringify(req.body)}` });
});
*/

export const articleApi = {
    getCopyArticles,
}