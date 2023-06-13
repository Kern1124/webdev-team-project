import { Input } from "@chakra-ui/input";
import { ChangeEventHandler } from "react";

interface CustomInputProps {
  inputChangeHandler: ChangeEventHandler<HTMLInputElement>;
  placeholder: string,
  borderColor?: string
}

export const CustomInput = ({ inputChangeHandler, placeholder, borderColor }: CustomInputProps) => {
  return (
    <Input
      focusBorderColor="main"
      variant="filled"
      placeholder={placeholder}
      bgColor="light"
      onChange={inputChangeHandler}
      borderColor={borderColor ?? "white"}
      maxLength={30}
    />
  );
};
