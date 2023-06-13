import { useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/layout';
import { DatePicker } from './DatePicker';

interface CopiesFilterProps {
  onDateRangeChange: (startDate: Date | null, endDate: Date | null) => void;
}

export const CopiesFilter = ({ onDateRangeChange }: CopiesFilterProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    if (endDate && date && date > endDate) {
      setEndDate(date);
    }
    onDateRangeChange(date, endDate);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    if (startDate && date && date < startDate) {
      setStartDate(date);
    }
    onDateRangeChange(startDate, date);
  };

  return (
    <Box backgroundColor="white" padding="0.1rem 0.5rem 0rem" marginBottom="1rem" marginTop="1rem" borderRadius="md" display="inline-block">
      <Text fontSize="lg" marginBottom="0.2rem" color="Main">
        Select a date
      </Text>
      <Flex w="100%" flexDir="row" marginBottom="1rem" gap="1rem">
        <DatePicker placeholder="Start Date" onDateChange={handleStartDateChange} />
        <DatePicker placeholder="End Date" onDateChange={handleEndDateChange} />
      </Flex>
    </Box>
  );
};
