import { Grid, GridItem } from '@chakra-ui/layout';
import { useMemo } from 'react';
import { useState } from 'react';
import { useDebounce } from 'usehooks-ts'
import { NewspaperCard } from '../components/NewspaperCard';
import { NewspaperFilter } from '../components/NewspaperFilter';

const SAMPLE_NEWSPAPERS = [
  { id: "1", title: "TEST 1" },
  { id: "2", title: "TEST 2" },
  { id: "3", title: "TEST 3" },
  { id: "4", title: "TEST 4" },
  { id: "5", title: "TEST 5" },
  { id: "6", title: "TEST 6" },
  { id: "7", title: "TEST 7" },
];

export const NewspaperPage = () => {
  const [publisher, setPublisher] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const debouncedTitle = useDebounce(title, 300);
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
    <>
      <NewspaperFilter onInputChange={setTitle} onSelectChange={setPublisher} />
      <Grid gap={14} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        {newspapers}
      </Grid>
    </>
  );
};
