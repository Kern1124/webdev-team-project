import { useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { useQuery } from '@tanstack/react-query';
import { CopiesFilter } from '../components/CopiesFilter';
import { CopyList } from '../components/CopyList';
import { getNewspaper } from '../api/requests';
import { useParams } from 'react-router-dom';

export const CopiesPage = () => {
  const { id: newspaperId } = useParams();
  const [dateRange, setDateRange] = useState<{ startDate: Date | null; endDate: Date | null }>({
    startDate: null,
    endDate: null,
  });
  const debouncedDateRange = useDebounce(dateRange, 300);

  const handleDateRangeChange = (startDate: Date | null, endDate: Date | null) => {
    setDateRange({ startDate, endDate });
  };

const { data, isLoading } = useQuery({
    queryKey: ["copies", newspaperId, debouncedDateRange.startDate, debouncedDateRange.endDate],
    queryFn: () => getNewspaper(newspaperId ?? ""),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <CopiesFilter onDateRangeChange={handleDateRangeChange} />
      <CopyList copies={data?.newspaperCopies} isLoading={isLoading} />
    </>
  );
};