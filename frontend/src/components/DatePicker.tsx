import { useState } from "react";
import { Input } from "@chakra-ui/input";

interface DatePickerProps {
  placeholder: string;
  onDateChange: (date: Date | null) => void;
}

export const DatePicker = ({ placeholder, onDateChange }: DatePickerProps) => {
  const [date, setDate] = useState<Date | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const dateValue = value ? new Date(value) : null;
    setDate(dateValue);
    onDateChange(dateValue);
  };

  return (
    <Input
      placeholder={placeholder}
      size="md"
      type="date"
      variant="filled"
      focusBorderColor="main"
      bgColor="light"
      borderColor="main"
      value={date ? date.toISOString().slice(0, 10) : ""}
      onChange={handleDateChange}
    />
  );
};
