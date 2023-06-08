import { Input } from '@chakra-ui/input';
import { Flex } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useCallback, useMemo } from 'react';

import { getAllPublishers } from '../api/requests';
import { PublisherShortType } from '../types/publisher';

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
      <Select
        onChange={selectChangeHandler}
        focusBorderColor="main"
        placeholder="Select a publisher"
        variant="filled"
        bgColor="light"
      >
        {publishers}
      </Select>
      <Input
        focusBorderColor="main"
        variant="filled"
        placeholder="Type in a newspaper name"
        bgColor="light"
        onChange={inputChangeHandler}
      />
    </Flex>
  );
};
