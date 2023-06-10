import { Category } from "./category"

export type Article = {
    categories: Category[]
    heading: string,
    id: string,
    approved?: boolean
}