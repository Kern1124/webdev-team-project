import { Box, Divider, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getArticleWithId, getRelatedArticles } from "../api/requests"
import { useQuery } from "@tanstack/react-query"
import { RelatedSidebar } from "../components/RelatedSidebar"
import { ArticleContent } from "../components/ArticleContent"
import { ArticleContentHeading } from "../components/ArticleContentHeading"

interface ArticleProp {
    articleId: string
}

export const ArticlePage = ({articleId}: ArticleProp) => {

    const { data: articleData } = useQuery({
        queryKey: ['article', articleId],
        queryFn: () => getArticleWithId(articleId),
        staleTime: 1000 * 60 * 2,
        refetchOnWindowFocus: false,
      });
    
      const { data: relatedData } = useQuery({
        queryKey: ['related', articleId],
        queryFn: () => getRelatedArticles(articleId),
        staleTime: 1000 * 60 * 2,
        refetchOnWindowFocus: false,
      });

      const article = articleData?.item
      const related = relatedData?.item // TBD, query funguje, ale treba ešte implementovať cez ArticleList

      if (article == null){
        return <div></div>;
      }

      console.log(article)

    return (
        <Flex alignItems={"center"} width={"full"} flexDirection={"column"}>
            <Divider borderColor={'main'}/>
            <ArticleContentHeading {...article}/>
            <Divider borderColor={'main'}/>
            <ArticleContent {...article}/>
        </Flex>
    );
}