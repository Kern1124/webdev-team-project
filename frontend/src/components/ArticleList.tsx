import { Box, Divider } from "@chakra-ui/react";
import { useMemo } from "react";
import { ArticleItem } from "./ArticleItem";
import { Article } from "../types/article";

interface ArticleListProps {
  articles: Article[];
}

export const ArticleList = ({ articles }: ArticleListProps) => {
  const mappedArticles = useMemo(() => {
    if (articles == null) {
      return [];
    }

    return articles.map((article, index) => (
      <Box key={article.id}>
        <ArticleItem article={article} />
        {index < articles.length - 1 && <Divider my={2} />}
      </Box>
    ));
  }, [articles]);

  return (
    <Box bg="white" p={4}>
      {mappedArticles.length > 0 ? mappedArticles : "No articles"}
    </Box>
  );
};
