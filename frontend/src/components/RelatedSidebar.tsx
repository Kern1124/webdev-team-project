import { Box, Card, Divider, Flex } from "@chakra-ui/react";
import { ArticleList } from "./ArticleList";
import { Article } from "../types/article";
import { SubpageHeading } from "./SubpageHeading";

interface ArticleListProp {
  articles: Article[];
}

export const RelatedSidebar = (articleListProp: ArticleListProp) => {
  return (
    <Flex
      flex={1}
      minWidth={"20%"}
      borderColor={"main"}
      alignItems="flex-start"
    >
      <Divider orientation="vertical" marginLeft={"0.5rem"} />
      <Card
        flex={1}
        p="0.8rem"
        overflow="auto"
        marginLeft={{ base: "0", md: "1rem" }}
      >
        <SubpageHeading heading="Related articles:" />
        <ArticleList {...articleListProp} />
      </Card>
    </Flex>
  );
};
