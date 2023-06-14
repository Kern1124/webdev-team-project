import { Box } from "@chakra-ui/layout";

interface ArticleHeadingProp {
  heading: string;
  author: { username: string };
}

export const ArticleContentHeading = ({
  heading,
  author,
}: ArticleHeadingProp) => {
  return (
    <Box textAlign={"center"} margin={["0rem", "1rem"]} fontSize={28}>
      {heading}
      <Box textAlign={"center"} fontSize={14}>
        by {author.username}
      </Box>
    </Box>
  );
};
