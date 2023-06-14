import { PublisherNameType } from "./publisher";
import { Copy } from "./copy";

export type NewspaperShortType = {
  id: string;
  name: string;
  newspaperImg: string;
  publisher: PublisherNameType;
  isEditable?: boolean
};

export type Newspaper = {
  id: string;
  name: string;
  publisher: PublisherNameType;
  newspaperCopies: Copy[];
};
