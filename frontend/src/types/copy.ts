import { Article } from "./article";

export type Copy = {
  articles: Article[];
  date: string;
  id: string;
  published?: boolean;
  isPublishable?: boolean;
  isOpenInitially?: boolean;
};
