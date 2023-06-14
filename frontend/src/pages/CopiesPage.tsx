import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDebounce } from "usehooks-ts";

import { getNewspaper } from "../api/requests";
import { CopiesFilter } from "../components/CopiesFilter";
import { CopyList } from "../components/CopyList";
import { SubpageHeading } from "../components/SubpageHeading";

export const CopiesPage = () => {
  const { id: newspaperId } = useParams();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [heading, setHeading] = useState<string | null>(null);
  const debouncedHeading = useDebounce(heading, 300);
  const debouncedStartDate = useDebounce(startDate, 300);
  const debouncedEndDate = useDebounce(endDate, 300);

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const [pageTitle, setPageTitle] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: [
      "copies",
      newspaperId,
      debouncedStartDate,
      debouncedEndDate,
      debouncedHeading,
    ],
    queryFn: () =>
      getNewspaper(
        newspaperId ?? "",
        debouncedStartDate?.toISOString() ?? "null",
        debouncedEndDate?.toISOString() ?? "null",
        debouncedHeading
      ),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data?.name) {
      setPageTitle(data?.name);
    }
  }, [data?.name]);

  return (
    <>
      <SubpageHeading heading={pageTitle} />
      <CopiesFilter
        onDateRangeChange={handleDateChange}
        setInput={setHeading}
      />
      <CopyList copies={data?.newspaperCopies} isLoading={isLoading} />
    </>
  );
};
