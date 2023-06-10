import { Article } from '../types/article';
import { Link, Box, Tag, Button } from '@chakra-ui/react';
import { useAuth } from "../hooks/useAuth";

type ArticleItemProps = {
  article: Article;
}

export const ArticleItem = ({ article } : ArticleItemProps) => {
    const { auth } = useAuth();
    const userRole = auth.item.userRole;
  
    return (
      <Box mb={5}>
        <Box as="a" href="/somewhere" display="inline-block" borderRadius="md" p={2} _hover={{ backgroundColor: "purple" }}>
          {article.heading}
        </Box>
        <Box mt={2}>
          {article.categories.map((category, index) => (
            <Tag key={index} borderRadius="full" variant="outline" colorScheme="teal" ml={2}>
              {category.name}
            </Tag>
          ))}
        </Box>
        {userRole === 'MANAGER' && !article.approved && (
          <Box mt={2}>
            <Button colorScheme="green" variant="outline" size="sm" mr={2}>Approve</Button>
            <Button colorScheme="red" variant="outline" size="sm">Discard</Button>
          </Box>
        )}
      </Box>
    );
}
  
export default ArticleItem;
  

