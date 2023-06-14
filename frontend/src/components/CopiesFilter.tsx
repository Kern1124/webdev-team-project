import { ChangeEvent, useCallback, useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/layout";
import { DatePicker } from "./DatePicker";
import { CustomInput } from "./CustomInput";

interface CopiesFilterProps {
  onDateRangeChange: (startDate: Date | null, endDate: Date | null) => void;
  setInput: (value: string) => void;
}

export const CopiesFilter = ({
  onDateRangeChange,
  setInput,
}: CopiesFilterProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = useCallback(
    (date: Date | null) => {
      setStartDate(date);
      if (endDate && date && date > endDate) {
        setEndDate(date);
      }
      onDateRangeChange(date, endDate);
    },
    [endDate, onDateRangeChange]
  );

  const handleEndDateChange = useCallback(
    (date: Date | null) => {
      setEndDate(date);
      if (startDate && date && date < startDate) {
        setStartDate(date);
      }
      onDateRangeChange(startDate, date);
    },
    [startDate, onDateRangeChange]
  );

  const inputChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    },
    [setInput]
  );

  return (
    <Box
      backgroundColor="white"
      padding="1rem"
      marginBottom="1rem"
      marginTop="1rem"
      borderRadius="md"
    >
      <Text fontSize="lg" marginBottom="0.7rem" color="Main">
        Filter copies
      </Text>
      <Flex w="100%" flexDir={{ base: "column", md: "row" }} gap="1rem">
        <DatePicker
          placeholder="Start Date"
          onDateChange={handleStartDateChange}
        />
        <DatePicker placeholder="End Date" onDateChange={handleEndDateChange} />
        <CustomInput
          placeholder="Type in article heading"
          inputChangeHandler={inputChangeHandler}
          borderColor="main"
        />
      </Flex>
    </Box>
  );
};
