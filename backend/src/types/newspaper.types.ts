import { Article, Category, Newspaper, Newspaper_copy } from '@prisma/client'

export type NewspaperCreateData = {
    publisherId: string,
    name: string,
}

export type NewspaperRequest = {
    publisherId: string,
    name: string,
}

export type NewspaperWithCopies = Newspaper & { newspaperCopies: Newspaper_copy[] }

export type NewspaperWithCopiesAndRolePermission = Newspaper & {
    // only adding isPublishable and isApprovable
    newspaperCopies: {
        id: string;
        date: Date;
        newspaperId: string;
        published: boolean;
        isPublishable: boolean;
        articles: {
            id: string;
            approved: boolean;
            authorId: string;
            heading: string;
            categories: Category[];
            isApprovable: boolean;
        }[];
    }[];
};