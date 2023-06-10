import { Box } from '@chakra-ui/react';
import { useAuth } from "../hooks/useAuth";
import { ArticleHeading } from "./ArticleHeading";
import { ArticleCategories } from "./ArticleCategories";
import { ApprovalAction } from "./ApprovalAction";
import { Article } from "../types/article";

type ArticleItemProps = {
  article: Article;
}

export const ArticleItem = ({ article }: ArticleItemProps) => {
  const { auth } = useAuth();
  const userRole = auth.item.userRole;

  return (
    <Box mb={5}>
      <ArticleHeading heading={article.heading} />
      <ArticleCategories categories={article.categories.map(category => category.name)} />
      {userRole === 'MANAGER' && !article.approved &&
        <ApprovalAction
          approve={{name: "Approve", link: "/approve-link"}}
          discard={{name: "Discard", link: "/discard-link"}}
        />
      }
    </Box>
  );
};
