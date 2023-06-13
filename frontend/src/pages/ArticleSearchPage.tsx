import { useParams } from "react-router";
import { SubpageHeading } from "../components/SubpageHeading";
import { Divider } from "@chakra-ui/layout";
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


  const articles = useMemo(() => data?.items ?? [], [data])
  console.log(articles)

  const renderedContent = isLoading ? (
    <CenteredBanner>
      <Spinner />
    </CenteredBanner>
  ) : (
    <ArticleList articles={articles} />
  );

  return (
    <>
      <SubpageHeading heading="Article results" />
      <Divider mt="1rem" mb="2rem" borderColor="main" />
      <Card>
      {renderedContent}
      </Card>
    </>
  );
};
