import { Article, Category, Newspaper, Newspaper_copy } from '@prisma/client'
import { boolean } from 'yup';

export type NewspaperCreateData = {
    publisherId: string,
    name: string,
}

export type NewspaperRequest = {
    publisherId: string,
    name: string,
}

export type NewspaperWithCopies = Newspaper & { newspaperCopies: Newspaper_copy[] }
export type NewspaperWithCopiesArticles = Newspaper & {
    newspaperCopies: Newspaper_copyWithArticles[];
};

type Newspaper_copyWithArticles = Newspaper_copy & {
    articles: ArticlesWithCategories[];
};


type ArticlesWithCategories = {
    id: string,
    authorId: string,
    heading: string,
    approved: boolean,
} & {
    categories: Category[]
}

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