
export type CommentType = {
    id: string,
    content: string,
    author: string,
    createdAt: string,
}

export type CommentSubmitType = {
    articleId: string,
    content: string
}