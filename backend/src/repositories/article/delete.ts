import { Result } from "@badrap/result";
import { db } from "../../utils/db.server";
import { Article } from "@prisma/client";
import { ArticleDeleteData } from "../../types/article.types";

export const create = async (data: ArticleDeleteData): Promise<Result<Article>> => {

    try {
        //Remove an article and return it
        return Result.ok(await db.article.delete({
            where: {
                id: data.id,
            },
        }));
    } catch (err) {
        return Result.err(err as Error);
    }
}