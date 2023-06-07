import { date, object, string } from 'yup';

export const CopyArticlesSchema = object({
    newspaperCopyId: string().optional(),
    content: string()
});