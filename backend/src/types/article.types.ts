import { Article, Category } from "@prisma/client"

export type ArticleCreateData = {
    heading: string
    contents: string,
    authorId: string,
    categories: string[]
    newspaperId: string
}

export type ArticleWithAuthor = {
    heading: string,
    contents: string,
    author: {username: string}
}

export type ArticleWithCategories = Article & { categories: {name: string}[] }

export type ArticleDeleteData = {
    id: string
}

export type CopyArticlesData = {
    newspaperCopyId: string | undefined,
    content: string
}