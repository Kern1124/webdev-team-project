import { Box, Flex } from "@chakra-ui/react"
import { RelatedSidebar } from "./RelatedSidebar"
import { Article } from "../types/article"

interface ArticleContentProp {
    contents: string,
    related: Article[]
}

export const ArticleContent = ({contents, related}: ArticleContentProp) => {
    const articleListProp = {articles: related}
    return (
        <Flex margin={'1rem'} gap="1rem" flex={1} width={'100%'} flexDir={{base: "column", md: "row"}}>
            <Box flex={1} flexGrow={3.5} marginLeft={{base: "0", md:'20%'}}>
                <div dangerouslySetInnerHTML={ {__html: contents ?? ""}}/>
            </Box>
            <RelatedSidebar {...articleListProp}/>
        </Flex>
    )}