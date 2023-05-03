import { FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { IconType } from "react-icons";

import { Icon } from "@chakra-ui/react";

interface FormInputProps {
  children: string;
  placeholder: string;
  icon: IconType;
  inputType?: string,
}

export const FormInput = ({ children, placeholder, icon, inputType }: FormInputProps) => {
  return (
    <>
      <FormLabel marginLeft="-0.9rem">{children}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<Icon as={icon} />}  />
        <Input
            focusBorderColor="main"
            marginBottom="1.5rem"
            placeholder={placeholder}
            variant="flushed"
            type={inputType ?? "text"}
        />
      </InputGroup>
    </>
  );
};
