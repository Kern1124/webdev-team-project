export type ArticleCreateData = {
    contents: string,
    newspaperCopyId: string,
    authorId: string,
}

export type ArticleDeleteData = {
    id: string
}

export type CopyArticlesData = {
    newspaperCopyId: string | undefined,
    content: string
}