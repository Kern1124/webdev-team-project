import { Grid, GridItem } from "@chakra-ui/layout";
import { useMemo } from "react";
import { NewspaperCard } from "./NewspaperCard";
import { NewspaperShortType } from "../types/newspaper";

interface NewspaperGridProps {
  newspapers: NewspaperShortType[];
}

export const NewspaperGrid = ({ newspapers }: NewspaperGridProps) => {
  const mappedNewspapers = useMemo(() => {
    if (newspapers == null) {
      return [];
    }

    return newspapers?.map((newspaper) => {
      return (
        (
          <GridItem key={newspaper.id}>
            <NewspaperCard title={newspaper.name} onClickUrl={newspaper.id} />
          </GridItem>
        ) ?? []
      );
    });
  }, [newspapers]);

  return (
    <Grid gap={14} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
      {mappedNewspapers}
    </Grid>
  );
};
