import { Box, Tag } from "@chakra-ui/react";
import { useMemo } from "react";

type ArticleCategoriesProps = {
  categories: string[];
}

export const ArticleCategories = ({ categories }: ArticleCategoriesProps) => {
  const mappedCategories = useMemo(() => {
    if (categories == null) {
      return [];
    }

    return categories.map((category, index) => (
      <Tag 
        key={index} 
        borderRadius="full" 
        variant="outline" 
        colorScheme="teal"
        ml={2}
      >
        {category}
      </Tag>
    ));
  }, [categories]);

  return (
    <Box mt={2}>
      {mappedCategories}
    </Box>
  );
};
