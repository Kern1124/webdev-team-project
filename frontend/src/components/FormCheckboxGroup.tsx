import { Control, Controller } from "react-hook-form"
import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox"
import { ArticleFormType } from "../types/article"
import { ReactElement } from "react";
import { BoxProps } from "@chakra-ui/layout";

interface FormCheckboxGroupProps {
    name: "categories";
    control: Control<ArticleFormType>;
    children?: ReactElement<BoxProps>[];
}
// TODO: change to generic later

export const FormCheckboxGroup = ({ name, control, children }: FormCheckboxGroupProps) => {
    return <Controller
    name={name}
    control={control}
    render={({ field: { ref, ...rest } }) => (
      <CheckboxGroup {...rest}>
        {children}
      </CheckboxGroup>
    )}
  />
}