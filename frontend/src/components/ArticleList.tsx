import { Box, Divider } from "@chakra-ui/react";
import { ArticleItem } from "./ArticleItem"
import { Article } from "../types/article";

interface ArticleListProps {
    articles: Article[];
}

export const ArticleList = ({ articles }: ArticleListProps) => {
    return (
      <Box bg="white" p={4}>
        {articles.map((article, index) => (
          <Box key={article.id}>
            <ArticleItem article={article} />
            {index < articles.length - 1 && <Divider my={2} />}
          </Box>
        ))}
      </Box>
    );
  };

