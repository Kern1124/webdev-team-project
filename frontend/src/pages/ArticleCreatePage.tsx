import "react-quill/dist/quill.snow.css";

import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { Flex } from "@chakra-ui/layout";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import { useCallback } from "react";
import { CustomButton } from "../components/CustomButton";
import { CustomEditor } from "../components/CustomEditor";
import { CustomSelect } from "../components/CustomSelect";
import { ArticleFormType } from "../types/article";
import { ArticleCreateSchema } from "../yup/schemata";
import { FormInput } from "../components/FormInput";
import { FormSelect } from "../components/FormSelect";
import { FormCheckboxGroup } from "../components/FormCheckboxGroup";
import { FormEditor } from "../components/FormEditor";

export const ArticleCreatePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleFormType>({ resolver: yupResolver(ArticleCreateSchema) });

  const onSubmit: SubmitHandler<ArticleFormType> = useCallback(async (data) => {
    console.log(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir={{ base: "column", md: "row" }} mt="1rem" gap="2rem">
        <Flex w={{ base: "100%", md: "20%" }} flexDir="column" gap="1rem">
          <FormSelect
            {...register("heading")}
            placeholder="Select a newspaper"
            errorMessage={errors.heading?.message}
          >
            {[<option>pero</option>]}
          </FormSelect>

          <FormCheckboxGroup name="categories" control={control}>
            <Checkbox value="naruto">Naruto</Checkbox>
            <Checkbox value="sasuke">Sasuke</Checkbox>
            <Checkbox value="kakashi">Kakashi</Checkbox>
          </FormCheckboxGroup>
        </Flex>
        <Flex
          w={{ base: "1000", md: "100%" }}
          flexDir="column"
          alignItems="center"
          gap="1rem"
        >
          <FormInput
            {...register("heading")}
            placeholder="Type in the article heading"
            errorMessage={errors.heading?.message}
          />

          <FormEditor
            name="content"
            control={control}
            placeholder="Input article content..."
          />
          <CustomButton>Submit article</CustomButton>
        </Flex>
      </Flex>
    </form>
  );
};
