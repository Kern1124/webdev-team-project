import { Box, Divider, Flex } from "@chakra-ui/react"

export const RelatedSidebar = () => {
    return (
        <Flex flex={1} minWidth={'20%'} borderColor={'main'}>
            <Divider orientation="vertical" marginLeft={2}/>
            <Box flex={1}>
                <Box textAlign={"center"}>Related articles:</Box>
                {/* <ArticleList articles={related}/> */}
            </Box>
        </Flex>
    )}