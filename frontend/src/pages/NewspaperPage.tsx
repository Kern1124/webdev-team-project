import { useState } from 'react';
import { useDebounce } from 'usehooks-ts';

import { NewspaperFilter } from '../components/NewspaperFilter';
import { NewspaperGrid } from '../components/NewspaperGrid';

export const NewspaperPage = () => {
  const [publisher, setPublisher] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const debouncedTitle = useDebounce(title, 300);


      
  return (
    <>
      <NewspaperFilter onInputChange={setTitle} onSelectChange={setPublisher} />
      <NewspaperGrid />
    </>
  );
};
