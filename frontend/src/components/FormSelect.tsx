import { FormLabel } from "@chakra-ui/form-control";
import React, { ReactNode } from "react";
import { LegacyRef } from "react";
import { ChangeHandler } from "react-hook-form";
import { IconType } from "react-icons";
import { ErrorText } from "./ErrorText";
import { Select } from "@chakra-ui/select";

interface FormInputProps {
  label: string;
  children?: ReactNode[];
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
      errorMessage,
      onChange,
      onBlur,
      name,
      label,
    }: FormInputProps,
    ref: LegacyRef<HTMLSelectElement>
  ) => {
    return (
      <>
        <FormLabel marginLeft="-0.9rem">{label}</FormLabel>
        <Select
          focusBorderColor="main"
          placeholder={placeholder}
          variant="filled"
          bgColor="light"
          marginBottom="0.3rem"
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          name={name}
          id={name}
        >
          {children}
        </Select>
        <ErrorText message={errorMessage} />
      </>
    );
  }
);
