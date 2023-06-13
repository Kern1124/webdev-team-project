import { useParams } from "react-router";
import { SubpageHeading } from "../components/SubpageHeading";
import { Box, Divider } from "@chakra-ui/layout";
import { useQuery } from "@tanstack/react-query";
import { getArticlesByContent } from "../api/requests";
import { ArticleList } from "../components/ArticleList";
import { CenteredBanner } from "../components/CenteredBanner";
import { Spinner } from "@chakra-ui/spinner";
import { Card } from "@chakra-ui/card";
import { useMemo } from "react";

export const ArticleSearchPage = () => {
  const { content } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["article", content],
    queryFn: () => getArticlesByContent(content ?? ""),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });

  const articles = useMemo(() => data?.items ?? [], [data]);

  const renderedContent = isLoading ? (
    <CenteredBanner>
      <Spinner />
    </CenteredBanner>
  ) : (
    <ArticleList articles={articles} />
  );

  return (
    <Box mt={{ base: "0", md: "2rem" }}>
      <SubpageHeading heading={`Article results for "${content}"`} />
      <Divider mt="1rem" mb="2rem" borderColor="main" />
      <Card>{renderedContent}</Card>
    </Box>
  );
};
