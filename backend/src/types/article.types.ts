export type ArticleCreateData = {
    heading: string
    contents: string,
    authorId: string,
    categories: string[]
    newspaperId: string
}

export type ArticleDeleteData = {
    id: string
}

export type CopyArticlesData = {
    newspaperCopyId: string | undefined,
    content: string
}