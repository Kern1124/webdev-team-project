import { Box, Flex } from "@chakra-ui/react"
import { RelatedSidebar } from "./RelatedSidebar"

interface ArticleContentProp {
    contents: string,
}

export const ArticleContent = ({contents}: ArticleContentProp) => {
    return (
        <Flex margin={'1rem'} flex={1} width={'100%'}>
            <Box flex={1} flexGrow={3.5} marginLeft={'20%'}>
                <div dangerouslySetInnerHTML={ {__html: contents ?? ""}}/>
            </Box>
            <RelatedSidebar/>
        </Flex>
    )}