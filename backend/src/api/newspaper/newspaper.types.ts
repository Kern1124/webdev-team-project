import { Newspaper, Newspaper_copy } from '@prisma/client'

export type NewspaperCreateData = {
    publisherId: string,
    name: string,
}

export type NewspaperRequest = {
    publisherId: string,
    name: string,
}

export type NewspaperWithCopies = Newspaper & { newspaperCopies: Newspaper_copy[] }