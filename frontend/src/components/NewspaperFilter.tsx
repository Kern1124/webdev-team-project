import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { ChangeEvent, useCallback, useMemo } from "react";

const SAMPLE_PUBLISHER = [
  { id: "1", name: "publisher 1" },
  { id: "2", name: "publisher 2" },
];

interface NewspaperFilterProps {
  onInputChange: (input: string) => void;
  onSelectChange: (select: string) => void;
}

export const NewspaperFilter = ({
  onInputChange,
  onSelectChange,
}: NewspaperFilterProps) => {
  const publishers = useMemo(
    () =>
      SAMPLE_PUBLISHER.map((publisher) => {
        return <option key={publisher.id} value={publisher.id}>{publisher.name}</option>;
      }),
    [SAMPLE_PUBLISHER]
  );

  const inputChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onInputChange(e.target.value),
    [onInputChange]
  );

  const selectChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => onInputChange(e.target.value),
    [onInputChange]
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
