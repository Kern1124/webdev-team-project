import { BoxProps } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { ReactElement } from 'react';
import { Control, Controller } from 'react-hook-form';

import { ArticleFormType } from '../types/article';
import { ErrorText } from './ErrorText';

interface FormSelectProps {
  name: "newspaperId";
  control: Control<ArticleFormType>;
  children?: ReactElement<BoxProps>[];
  errorMessage?: string;
  placeholder: string;
}
// TODO: change to generic later

export const FormSelect = ({
  name,
  control,
  children,
  errorMessage,
  placeholder,
}: FormSelectProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            focusBorderColor="main"
            placeholder={placeholder}
            variant="filled"
            bgColor="light"
            marginBottom="0.3rem"
          >
            {children}
          </Select>
        )}
      />
      <ErrorText message={errorMessage} />{" "}
    </>
  );
};
