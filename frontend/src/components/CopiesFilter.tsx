import { useState } from 'react';
import { Input } from '@chakra-ui/input';
import { Flex, Box, Text } from '@chakra-ui/layout';

interface CopiesFilterProps {
  onDateRangeChange: (startDate: Date | null, endDate: Date | null) => void;
}

export const CopiesFilter = ({ onDateRangeChange }: CopiesFilterProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const dateValue = value ? new Date(value).toISOString().slice(0, 10) : null;
    
    if (endDate && dateValue && new Date(dateValue) > endDate) {
      // If the new start date is later than the current end date, adjust the end date
      setEndDate(new Date(dateValue));
      onDateRangeChange(new Date(dateValue), new Date(dateValue));
    } else {
      setStartDate(dateValue ? new Date(dateValue) : null);
      onDateRangeChange(dateValue ? new Date(dateValue) : null, endDate);
    }
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const dateValue = value ? new Date(value).toISOString().slice(0, 10) : null;
    
    if (startDate && dateValue && new Date(dateValue) < startDate) {
      // If the new end date is earlier than the current start date, adjust the start date
      setStartDate(new Date(dateValue));
      onDateRangeChange(new Date(dateValue), new Date(dateValue));
    } else {
      setEndDate(dateValue ? new Date(dateValue) : null);
      onDateRangeChange(startDate, dateValue ? new Date(dateValue) : null);
    }
  };

  return (
    <Box backgroundColor="white" padding="0.1rem 0.5rem 0rem" marginBottom="1rem" marginTop="1rem" borderRadius="md" display="inline-block">
      <Text fontSize="lg" marginBottom="0.2rem" color="Main">
        Ranged selection
      </Text>
      <Flex w="100%" flexDir="row" marginBottom="1rem" gap="1rem">
        <Box>
          <Input
            placeholder="Start Date"
            size="md"
            type="date"
            value={startDate ? startDate.toISOString().slice(0, 10) : ''}
            onChange={handleStartDateChange}
          />
        </Box>
        <Box>
          <Input
            placeholder="End Date"
            size="md"
            type="date"
            value={endDate ? endDate.toISOString().slice(0, 10) : ''}
            onChange={handleEndDateChange}
          />
        </Box>
      </Flex>
    </Box>
  );
};