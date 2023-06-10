import { Category } from "./category"

export type Article = {
    categories: Category[]
    heading: string,
    id: string,
    approved?: boolean
}

export interface ArticleFormType {
    heading: string,
    content: string,
    categories: string[]
    newspaper: string
}

export type CategoryType = {
    id: string;
    name: string;
}