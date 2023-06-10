import { date, object, string, array } from 'yup';

export const CopyArticlesSchema = object({
    newspaperCopyId: string().optional(),
    content: string()
});

export const ArticleCreateSchema = object().shape({
    heading: string().min(6, "Article heading has to be at least 6 characters long").required(),
    contents: string().required("Content cannot be empty"),
    categories: array().of(string().required()).min(1, "A category must be selected").required("A category must be selected"),
    newspaperId: string().required("Newspaper must be selected")
  })
  