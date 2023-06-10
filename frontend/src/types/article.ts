
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