import { Box, Spinner } from "@chakra-ui/react";
import { useMemo } from "react";
import { CopyItem } from "./CopyItem";
import { Copy } from "../types/copy";
import { CenteredBanner } from "./CenteredBanner";

interface CopyListProps {
  copies: Copy[];
  isLoading: boolean;
}

export const CopyList = ({ copies, isLoading }: CopyListProps) => {
  const renderedCopies = useMemo(() => {
    if (copies == null) {
      return [];
    }

    return copies?.map((copy) => {
      return (
        (
          <CopyItem
            key={copy.id}
            id={copy.id}
            date={copy.date}
            articles={copy.articles}
            published={copy.published}
            isPublishable={copy.isPublishable} />
        ) ?? []
      );
    });
  }, [copies]);

  if (isLoading) {
    return <CenteredBanner><Spinner /></CenteredBanner>;
  }

  if (renderedCopies.length <= 0) {
    return <CenteredBanner>No copies found</CenteredBanner>;
  }


  return (
    <Box>
      {renderedCopies}
    </Box>
  );
};

