import { Box, Flex } from "@chakra-ui/react";
import { ArticleHeading } from "./ArticleHeading";
import { ArticleCategories } from "./ArticleCategories";
import { ApprovalAction } from "./ApprovalAction";
import { Article } from "../types/article";
import { Authorized } from "./Authorized";

type ArticleItemProps = {
  article: Article;
};

export const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <Box>
      <Flex align="center" justifyContent="space-between" flexDir="row">
        <Flex flexDir="column">
          <ArticleHeading heading={article.heading} id={article.id} />
          <ArticleCategories
            categories={article.categories.map((category) => category.name)}
          />
        </Flex>
        <Authorized role={"MANAGER"} condition={!article.approved && article.isApprovable}>
          <ApprovalAction
            approveName="Approve"
            discardName="Discard"
            approveUrl={`/articles/${article.id}/approve`}
            discardUrl={`/articles/${article.id}/discard`}
          />
        </Authorized>
      </Flex>
    </Box>
  );
};
