import { FormLabel } from "@chakra-ui/form-control";
import React, { ReactNode } from "react";
import { LegacyRef } from "react";
import { ChangeHandler } from "react-hook-form";
import { ErrorText } from "./ErrorText";
import { Select } from "@chakra-ui/select";

interface FormSelectProps {
  label?: string;
  children?: ReactNode[];
  placeholder: string;
  inputType?: string;
  errorMessage?: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
}

export const FormSelect = React.forwardRef(
  (
    {
      children,
      placeholder,
      errorMessage,
      onChange,
      onBlur,
      name,
      label,
    }: FormSelectProps,
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
