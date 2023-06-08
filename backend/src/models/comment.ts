import { object, string } from 'yup';

export const commentCreateSchema = object({
    content: string().required(),
    articleId: string().required(),
    authorId: string().required(),
});
