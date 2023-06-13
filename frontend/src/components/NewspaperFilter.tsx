import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useCallback, useMemo } from "react";

import { getAllPublishers } from "../api/requests";
import { PublisherShortType } from "../types/publisher";
import { CustomSelect } from "./CustomSelect";
import { CustomInput } from "./CustomInput";

interface NewspaperFilterProps {
  onInputChange: (input: string) => void;
  onSelectChange: (select: string) => void;
}

export const NewspaperFilter = ({
  onInputChange,
  onSelectChange,
}: NewspaperFilterProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["publisher"],
    queryFn: () => getAllPublishers(),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });

  const publishers = useMemo(() => {
    if (isLoading) {
      return [];
    }

    return (
      data?.items?.map((publisher: PublisherShortType) => {
        return (
          <option key={publisher.id} value={publisher.id}>
            {publisher.name}
          </option>
        );
      }) ?? []
    );
  }, [data, isLoading]);

  const inputChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onInputChange(e.target.value),
    [onInputChange]
  );

  const selectChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => onSelectChange(e.target.value),
    [onSelectChange]
  );

  return (
    <Flex
      w={{ base: "100%", md: "50%" }}
      flexDir="row"
      marginBottom="4rem"
      marginTop="1rem"
      gap="1rem"
    >
      <CustomSelect
        placeholder="Select a publisher"
        changeHandler={selectChangeHandler}
      >
        {publishers}
      </CustomSelect>
      <CustomInput placeholder="Type in a newspaper name" inputChangeHandler={inputChangeHandler} />
    </Flex>
  );
};
