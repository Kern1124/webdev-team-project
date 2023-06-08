import { Result } from '@badrap/result';
import { Comment } from "@prisma/client";
import { db } from "../../utils/db.server";

import type { CreateCommentData } from "../../types/comment.types";
import { RoleRecordType } from '../../models/role';


export const create = async (data: CreateCommentData) => {
    try {
        //Create a new comment and return it
        return Result.ok(await db.comment.create({
            data: {
                content: data.content,
                author: { connect: { id: data.authorId } },
                article: { connect: { id: data.articleId } },
            },
        }));
    } catch (err) {
        return Result.err(err as Error);
    }
}

