import { Box, Flex } from "@chakra-ui/react"
import { RelatedSidebar } from "./RelatedSidebar"
import { Article } from "../types/article"

interface ArticleContent {
    contents: string,
}

export const ArticleContent = ({contents}: ArticleContent) => {
    return (
        <Flex margin={2} flex={1} width={'100%'}>
            <Box flex={1} flexGrow={3.5} marginLeft={'20%'}>
                <div dangerouslySetInnerHTML={ {__html: contents ?? ""}}/>
            </Box>
            <RelatedSidebar/>
        </Flex>
    )}