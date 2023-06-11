import { userLoginSchema, userRegistrationSchema } from "../../models/user";
import type { UserLoginData, UserRegisterData } from "../../types/user.types";
import { Request, Response } from "express";
import * as commentService from "../../repositories/comment/index"
// import { User } from "@prisma/client";
import { db } from "../../utils/db.server";
import { ValidationError } from "yup";
import { User } from "@prisma/client";
import { commentCreateSchema } from "../../models/comment";
import { CreateCommentData } from "../../types/comment.types";

const create = async (req: Request, res: Response) => {
  try {
    const authorId = req.session.user?.id;
    if (!authorId) {
      res.status(401).json({ message: "User is not authenticated" });
      return;
    }
    const validatedData = await commentCreateSchema.validate(req.body);
    const commentData = validatedData as CreateCommentData;

    const comment = await commentService.default.create({ ...commentData, authorId });
    if (comment.isErr) {
      res.status(400).json({ message: comment.error })
      return;
    }
    res.status(200).json({ item: comment.value, message: `Comment was created by ${req.session.user?.username} successfully.` });
    return;
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.message });
      return;
    }
    res.status(500).json({ message: (error as Error).message });
  }
};

const getArticleComments = async (req: Request, res: Response) => {
  try {
    const articleId = req.params.articleId
    const article = await db.article.findFirst({
      where: {
        id: articleId,
      },
    })
    if (!article) {
      return res.status(400).json({ message: "Article with this id doesn't exist." })
    }
    // add order by created At
    const comments = await db.comment.findMany({
      where: {
        articleId,
      },
      select: {
        author: {
          select: {
            username: true,
          },
        },
        createdAt: true,
        content: true,
      },
      orderBy: {
        createdAt: 'asc'
      }
    })
    res.status(200).json({ item: comments, message: "Fetched " + comments.length + " comments." })
  } catch (e) {
    res.status(500).json({ message: "Something went wrong.", error: e })
  }
}




export const commentApi = {
  create,
  getArticleComments,
};