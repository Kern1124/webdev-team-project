import { Box, Flex, Spacer } from '@chakra-ui/react';
import { ArticleHeading } from "./ArticleHeading";
import { ArticleCategories } from "./ArticleCategories";
import { ApprovalAction } from "./ApprovalAction";
import { Article } from "../types/article";
import { Authorized } from './Authorized';

type ArticleItemProps = {
  article: Article;
}

export const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <Box>
      <Flex align="center" justifyContent="space-between" flexDir="row">
        <Box><ArticleHeading heading={article.heading} /></Box>
        <Box><Authorized role={"MANAGER"} condition={!article.approved}>
          <ApprovalAction
            approveName="Approve"
            discardName="Discard"
            approveUrl={`/articles/${article.id}/approve`}
            discardUrl={`/articles/${article.id}/discard`}
          />
        </Authorized></Box>
      </Flex>
      <ArticleCategories categories={article.categories.map(category => category.name)} />
    </Box>
  );
}
