import { Grid, GridItem } from "@chakra-ui/layout";
import { useMemo } from "react";

import { NewspaperCard } from "./NewspaperCard";

const SAMPLE_NEWSPAPERS = [
  { id: "1", title: "TEST 1" },
  { id: "2", title: "TEST 2" },
  { id: "3", title: "TEST 3" },
  { id: "4", title: "TEST 4" },
  { id: "5", title: "TEST 5" },
  { id: "6", title: "TEST 6" },
  { id: "7", title: "TEST 7" },
];

export const NewspaperGrid = () => {
  const newspapers = useMemo(
    () =>
      SAMPLE_NEWSPAPERS.map((newspaper) => {
        return (
          <GridItem key={newspaper.id}>
            <NewspaperCard title={newspaper.title} onClickUrl={newspaper.id} />
          </GridItem>
        );
      }),
    [SAMPLE_NEWSPAPERS]
  );

  return (
    <Grid gap={14} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
      {newspapers}
    </Grid>
  );
};
