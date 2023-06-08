import { Grid, GridItem } from "@chakra-ui/layout";
import { useMemo } from "react";
import { NewspaperCard } from "./NewspaperCard";
import { NewspaperShortType } from "../types/newspaper";
import { CenteredBanner } from "./CenteredBanner";
import { Spinner } from "@chakra-ui/spinner";

interface NewspaperGridProps {
  newspapers: NewspaperShortType[];
  isLoading: boolean;
}

export const NewspaperGrid = ({ newspapers, isLoading }: NewspaperGridProps) => {
  const mappedNewspapers = useMemo(() => {
    if (newspapers == null) {
      return [];
    }

    return newspapers?.map((newspaper) => {
      return (
        (
          <GridItem key={newspaper.id}>
            <NewspaperCard title={newspaper.name} publisher={newspaper.publisher.name}  onClickUrl={newspaper.id} />
          </GridItem>
        ) ?? []
      );
    });
  }, [newspapers]);

  if (isLoading) {
    return <CenteredBanner><Spinner /></CenteredBanner>
  }
  
  if (mappedNewspapers.length <= 0) {
    return <CenteredBanner>No newspapers found</CenteredBanner>
  }
  

  return (
    <Grid gap={14} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
      {mappedNewspapers}
    </Grid>
  );
};
