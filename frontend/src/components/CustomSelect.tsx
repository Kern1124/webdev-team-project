import { Select } from "@chakra-ui/select";
import { ChangeEventHandler, ReactNode } from "react";

interface CustomSelectProps {
  placeholder: string;
  changeHandler: ChangeEventHandler<HTMLSelectElement>;
  children: ReactNode[];
}

export const CustomSelect = ({
  placeholder,
  changeHandler,
  children,
}: CustomSelectProps) => {
  return (
    <Select
      onChange={changeHandler}
      focusBorderColor="main"
      placeholder={placeholder}
      variant="filled"
      bgColor="light"
    >
      {children}
    </Select>
  );
};
