import { Box, Collapse } from "@chakra-ui/react";
import { ArticleList } from "./ArticleList";
import { Article } from "../types/article";

interface ArticleListCollapseProps {
  isOpen: boolean;
  articles: Article[];
}

export const ArticleListCollapse = ({
  isOpen,
  articles,
}: ArticleListCollapseProps) => {
  return (
    <Collapse in={isOpen}>
      <Box bg="light" color="main" fontSize={20} p={2} borderRadius="md">
        <ArticleList articles={articles} />
      </Box>
    </Collapse>
  );
};
