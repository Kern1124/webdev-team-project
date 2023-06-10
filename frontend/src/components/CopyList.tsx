import { Box } from "@chakra-ui/react";
import { CopyItem } from "./CopyItem";
import { Copy } from "../types/copy";

interface CopyListProps {
  copies: Copy[];
  isLoading: boolean;
}

export const CopyList = ({ copies, isLoading }: CopyListProps) => {
  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  if (copies == null || copies.length === 0) {
    return <Box>No copies found</Box>;
  }

  return (
    <Box>
      {copies.map((copy) => (
        <CopyItem date={copy.date} articles={copy.articles} published={copy.published} />
      ))}
    </Box>
  );
};