import { FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Icon, Text } from "@chakra-ui/react";
import React from "react";
import { LegacyRef } from "react";
import { ChangeHandler } from "react-hook-form";
import { IconType } from "react-icons";
import { ErrorText } from "./ErrorText";

interface FormInputProps {
  children: string;
  placeholder: string;
  icon: IconType;
  inputType?: string;
  errorMessage?: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
}

export const FormInput = React.forwardRef(
  (
    {
      children,
      placeholder,
      icon,
      inputType,
      errorMessage,
      onChange,
      onBlur,
      name,
    }: FormInputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <>
        <FormLabel marginLeft="-0.9rem">{children}</FormLabel>
        <InputGroup flexDir="column">
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={icon} />}
          />
          <Input
            focusBorderColor="main"
            marginBottom="0.3rem"
            placeholder={placeholder}
            variant="flushed"
            type={inputType ?? "text"}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            name={name}
            id={name}
          />
          <ErrorText message={errorMessage} />
        </InputGroup>
      </>
    );
  }
);
