import { FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Icon } from '@chakra-ui/react';
import { ChangeHandler } from 'react-hook-form';
import { IconType } from 'react-icons';

interface FormInputProps {
  children: string;
  placeholder: string;
  icon: IconType;
  inputType?: string;
  errorMessage?: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  ref: React.Ref<any>;
  name: string;
}

export const FormInput = ({
  children,
  placeholder,
  icon,
  inputType,
  errorMessage,
  onChange,
  onBlur,
  ref,
  name,
}: FormInputProps) => {
  return (
    <>
      <FormLabel marginLeft="-0.9rem">{children}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<Icon as={icon} />} />
        <Input
          focusBorderColor="main"
          marginBottom="1.5rem"
          placeholder={placeholder}
          variant="flushed"
          type={inputType ?? "text"}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          name={name}
        />
        {errorMessage ?? ""}
      </InputGroup>
    </>
  );
};
