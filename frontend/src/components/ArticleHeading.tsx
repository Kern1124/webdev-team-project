import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useCallback } from "react";

type ArticleHeadingProps = {
  heading: string;
  id: string;
}

export const ArticleHeading = ({ heading, id }: ArticleHeadingProps) => {
  const navigate = useNavigate();
  
  const handleClick = useCallback(() => {
    navigate(`/article/${id}`);
  }, [navigate, id]);

  return (
    <Box onClick={handleClick} display="inline-block" borderRadius="md" p="0.5rem" _hover={{ backgroundColor: "secondaryLight" }}>
      {heading}
    </Box>
  );
};