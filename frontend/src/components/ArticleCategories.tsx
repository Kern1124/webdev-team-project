import { Box, Tag } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useCallback, useMemo } from "react";

type ArticleCategoriesProps = {
  categories: string[];
}

export const ArticleCategories = ({ categories }: ArticleCategoriesProps) => {
  const navigate = useNavigate();

  const handleTagClick = useCallback((category: string) => {
    navigate(`/category/${category}`);
  }, [navigate]);

  const mappedCategories = useMemo(() => {
    if (categories == null) {
      return [];
    }

    return categories.map((category, index) => (
      <Tag 
        key={index} 
        onClick={() => handleTagClick(category)} 
        borderRadius="full" 
        variant="outline" 
        colorScheme="teal" 
        ml={2}
      >
        {category}
      </Tag>
    ));
  }, [categories, handleTagClick]);

  return (
    <Box mt={2}>
      {mappedCategories}
    </Box>
  );
};
