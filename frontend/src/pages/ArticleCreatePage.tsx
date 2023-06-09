import "react-quill/dist/quill.snow.css";

import { Checkbox } from "@chakra-ui/checkbox";
import { Flex } from "@chakra-ui/layout";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import { useCallback } from "react";
import { CustomButton } from "../components/CustomButton";
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
            name="newspaper"
            control={control}
            placeholder="Select a newspaper"
            errorMessage={errors.newspaper?.message}
          >
            {[<option>pero</option>]}
          </FormSelect>

          <FormCheckboxGroup name="categories" control={control} errorMessage={errors.categories?.message}>
            <Checkbox value="naruto">Naruto</Checkbox>
            <Checkbox value="sasuke">Sasuke</Checkbox>
            <Checkbox value="kakashi">Kakashi</Checkbox>
          </FormCheckboxGroup>
        </Flex>
        <Flex
          w={{ base: "100%", md: "100%" }}
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
            errorMessage={errors.content?.message}
          />
          <CustomButton>Submit article</CustomButton>
        </Flex>
      </Flex>
    </form>
  );
};
