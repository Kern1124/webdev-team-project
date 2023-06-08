import { useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { useQuery } from '@tanstack/react-query';
import { NewspaperFilter } from '../components/NewspaperFilter';
import { NewspaperGrid } from '../components/NewspaperGrid';
import { getNewspapers } from '../api/requests';

export const NewspaperPage = () => {
  const [publisher, setPublisher] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const debouncedTitle = useDebounce(title, 300);

  const { data, isLoading } = useQuery({
    queryKey: ["newspaper", publisher, debouncedTitle],
    queryFn: () => getNewspapers(publisher ?? "", debouncedTitle ?? ""),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });
  console.log(data)
  return (
    <>
      <NewspaperFilter onInputChange={setTitle} onSelectChange={setPublisher} />
      <NewspaperGrid />
    </>
  );
};
