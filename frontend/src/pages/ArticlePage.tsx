import { Box, Divider, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getArticleWithId, getRelatedArticles } from "../api/requests";
import { useQuery } from "@tanstack/react-query";
import { RelatedSidebar } from "../components/RelatedSidebar";
import { ArticleContent } from "../components/ArticleContent";
import { ArticleContentHeading } from "../components/ArticleContentHeading";
import { ArticleComments } from "../components/ArticleComments";
import { useParams } from "react-router-dom";
import { CenteredBanner } from "../components/CenteredBanner";

export const ArticlePage = () => {
  const { id: articleId } = useParams();

  const { data: articleData, isLoading } = useQuery({
    queryKey: ["article", articleId],
    queryFn: () => getArticleWithId(articleId ?? ""),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });

  const { data: relatedData } = useQuery({
    queryKey: ["related", articleId],
    queryFn: () => getRelatedArticles(articleId ?? ""),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });

  const article = articleData?.item;
  const related = relatedData?.item; // TBD, query funguje, ale treba ešte implementovať cez ArticleList

  if (isLoading) {
    return <CenteredBanner><Spinner /></CenteredBanner>;
  }

  const contentProp = { contents: article.contents, related: related };

  console.log(article);
  console.log(related);

  return (
    <>
      <Flex alignItems={"center"} width={"full"} flexDirection={"column"} marginBottom="2rem">
        <Divider borderColor={"main"} />
        <ArticleContentHeading {...article} />
        <Divider borderColor={"main"} />
        <ArticleContent {...contentProp} />
      </Flex>
      <ArticleComments articleId={articleId ?? ""} />
    </>
  );
};
