import { Control, Controller } from "react-hook-form";
import { CheckboxGroup } from "@chakra-ui/checkbox";
import { ArticleFormType } from "../types/article";
import { ReactElement } from "react";
import { Flex, BoxProps } from "@chakra-ui/layout";
import { ErrorText } from "./ErrorText";

interface FormCheckboxGroupProps {
  name: "categories";
  control: Control<ArticleFormType>;
  children?: ReactElement<BoxProps>[];
  errorMessage?: string;
}
// TODO: change to generic later

export const FormCheckboxGroup = ({
  name,
  control,
  children,
  errorMessage,
}: FormCheckboxGroupProps) => {
  return (
    <Flex flexDir={{ base:"row", md:"column"}} gap={{ base: "1rem", md: "0"}} overflow="scroll" h={{base:"6rem", md:"15rem"}}>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...rest } }) => (
          <CheckboxGroup {...rest}>{children}</CheckboxGroup>
        )}
      />
      <ErrorText message={errorMessage} />{" "}
    </Flex>
  );
};
