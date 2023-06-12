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
        <Flex margin={'1rem'} flex={1} width={'100%'}>
            <Box flex={1} flexGrow={3.5} marginLeft={'20%'}>
                <div dangerouslySetInnerHTML={ {__html: contents ?? ""}}/>
            </Box>
            <RelatedSidebar {...articleListProp}/>
        </Flex>
    )}