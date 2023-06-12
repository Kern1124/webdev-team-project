import { useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { useQuery } from '@tanstack/react-query';
import { CopiesFilter } from '../components/CopiesFilter';
import { CopyList } from '../components/CopyList';
import { SearchLink } from '../components/SearchLink';
import { getNewspaper } from '../api/requests';
import { useParams } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

export const CopiesPage = () => {
  const { id: newspaperId } = useParams();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const debouncedStartDate = useDebounce(startDate, 300);
  const debouncedEndDate = useDebounce(endDate, 300);

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["copies", newspaperId, debouncedStartDate, debouncedEndDate],
    queryFn: () =>
      getNewspaper(
        newspaperId ?? "",
        debouncedStartDate?.toISOString() ?? "",
        debouncedEndDate?.toISOString() ?? ""
      ),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <CopiesFilter onDateRangeChange={handleDateChange} />
        <SearchLink to="/TODO" placeholder="Filter articles by name" />
      </Flex>
      <CopyList copies={data?.newspaperCopies} isLoading={isLoading} />
    </>
  );
};