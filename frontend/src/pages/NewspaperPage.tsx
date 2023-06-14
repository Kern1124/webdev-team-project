import { useState } from "react";
import { useDebounce } from "usehooks-ts";
import { useQuery } from "@tanstack/react-query";
import { NewspaperFilter } from "../components/NewspaperFilter";
import { NewspaperGrid } from "../components/NewspaperGrid";
import { getNewspapers } from "../api/requests";
import { SubpageHeading } from "../components/SubpageHeading";

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

  return (
    <>
      <SubpageHeading heading="Newspapers" />
      <NewspaperFilter onInputChange={setTitle} onSelectChange={setPublisher} />
      <NewspaperGrid isLoading={isLoading} newspapers={data?.item} />
    </>
  );
};
