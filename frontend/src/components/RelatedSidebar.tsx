import { Box, Divider, Flex } from "@chakra-ui/react"
import { ArticleList } from "./ArticleList"
import { Article } from "../types/article"

interface ArticleListProp{
    articles: Article[]
}

export const RelatedSidebar = (articleListProp: ArticleListProp) => {
    return (
        <Flex flex={1} minWidth={'20%'} borderColor={'main'}>
            <Divider orientation="vertical" marginLeft={'0.5rem'}/>
            <Box flex={1}>
                <Box textAlign={"center"}>Related articles:</Box>
                <ArticleList {...articleListProp}/>
            </Box>
        </Flex>
    )}