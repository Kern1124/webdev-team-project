
export type CommentType = {
    id: string,
    content: string,
    author: string,
    createdAt: string,
}

export type CommentQueryType = {
    id: string,
    author: { username: string },
    createdAt: Date,
    content: string
}

export type CommentSubmitType = {
    articleId: string,
    content: string
}