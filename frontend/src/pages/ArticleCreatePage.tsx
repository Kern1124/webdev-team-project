import "react-quill/dist/quill.snow.css";

import { Flex } from "@chakra-ui/layout";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import { useCallback, useMemo } from "react";
import { CustomButton } from "../components/CustomButton";
import { ArticleFormType, CategoryType } from "../types/article";
import { ArticleCreateSchema } from "../yup/schemata";
import { FormInput } from "../components/FormInput";
import { FormSelect } from "../components/FormSelect";
import { FormCheckboxGroup } from "../components/FormCheckboxGroup";
import { FormEditor } from "../components/FormEditor";
import { useQuery } from "@tanstack/react-query";
import { getCategories, getNewspapers } from "../api/requests";
import { NewspaperShortType } from "../types/newspaper";
import { CustomCheckbox } from "../components/CustomCheckbox";

export const ArticleCreatePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleFormType>({ resolver: yupResolver(ArticleCreateSchema) });
  const { data: newspapers } = useQuery({
    queryKey: ["newspaper"],
    queryFn: () => getNewspapers("", ""),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });

  const { data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategories(),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });

  const newspaperItems = useMemo(() => {
    if (newspapers?.item == null) {
      return [];
    }

    return (
      newspapers.item?.map((newspaper: NewspaperShortType) => (
        <option key={newspaper.id} value={newspaper.id}>
          {newspaper.name}
        </option>
      )) ?? []
    );
  }, [newspapers]);

  const categoryItems = useMemo(() => {
    if (categories?.items == null) {
      return [];
    }

    return (
      categories.items?.map((category: CategoryType) => (
        <CustomCheckbox key={category.id} value={category.id}>
          {category.name}
        </CustomCheckbox>
      )) ?? []
    );
  }, [categories]);

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
            {newspaperItems}
          </FormSelect>

          <FormCheckboxGroup
            name="categories"
            control={control}
            errorMessage={errors.categories?.message}
          >
            {categoryItems}
          </FormCheckboxGroup>
        </Flex>
        <Flex
          w={{ base: "100%", md: "100%" }}
          flexDir="column"
          alignItems="center"
          gap="1rem"
          mt="-1.6rem"
        >
          <FormInput
            {...register("heading")}
            placeholder="Type in the article heading"
            errorMessage={errors.heading?.message}
          />

          <FormEditor
            name="contents"
            control={control}
            placeholder="Input article content..."
            errorMessage={errors.contents?.message}
          />
          <CustomButton>Submit article</CustomButton>
        </Flex>
      </Flex>
    </form>
  );
};
