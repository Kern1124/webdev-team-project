import { User, Article } from "@prisma/client";

export type CreateCommentData = {
    content: string,
    articleId: string,
    authorId: string,
}