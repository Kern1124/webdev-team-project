import { Result } from "@badrap/result";
import { db } from "../../utils/db.server";
import { Article } from "@prisma/client";
import { ArticleCreateData } from "../../types/article.types";

export const create = async (data: ArticleCreateData): Promise<Result<Article>> => {

    try {
        //Create a new article and return it
        return Result.ok(await db.article.create({
            data: {
                ...data,
            },
        }));
    } catch (err) {
        return Result.err(err as Error);
    }
}