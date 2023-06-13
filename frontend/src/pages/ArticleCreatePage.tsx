import "react-quill/dist/quill.snow.css";

import { Flex } from "@chakra-ui/layout";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCallback, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { getCategories, getNewspapers } from "../api/requests";
import { CustomButton } from "../components/CustomButton";
import { CustomCheckbox } from "../components/CustomCheckbox";
import { FormCheckboxGroup } from "../components/FormCheckboxGroup";
import { FormEditor } from "../components/FormEditor";
import { FormInput } from "../components/FormInput";
import { FormSelect } from "../components/FormSelect";
import { SubpageHeading } from "../components/SubpageHeading";
import { useErrorToast } from "../hooks/useErrorToast";
import { useSubmitArticle } from "../hooks/useSubmitArticle";
import { ArticleFormType, CategoryType } from "../types/article";
import { NewspaperShortType } from "../types/newspaper";
import { ErrorResponseType } from "../types/response";
import { ArticleCreateSchema } from "../yup/schemata";
import { useSuccessToast } from "../hooks/useSuccessToast";

export const ArticleCreatePage = () => {
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleFormType>({ resolver: yupResolver(ArticleCreateSchema) });
  const { data: newspapers } = useQuery({
    queryKey: ["newspaper"],
    queryFn: () => getNewspapers("", ""),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });
  const { submit, isLoading } = useSubmitArticle();
  const toast = useErrorToast();
  const successToast = useSuccessToast();

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

  const onSubmit: SubmitHandler<ArticleFormType> = useCallback(
    async (data) => {
      try {
        await submit(data);
        successToast("Article submitted for approval");
        reset({
          newspaperId: "",
          categories: [],
        });
      } catch (e) {
        const data = (e as AxiosError)?.response?.data as ErrorResponseType;
        toast(data?.message);
      }
    },
    [submit, toast, reset, successToast]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir={{ base: "column", md: "row" }} mt="1rem" gap="2rem">
        <Flex w={{ base: "100%", md: "20%" }} flexDir="column" gap="1rem">
          <FormSelect
            name="newspaperId"
            control={control}
            placeholder="Select a newspaper"
            errorMessage={errors.newspaperId?.message}
          >
            {newspaperItems}
          </FormSelect>
          <SubpageHeading heading="Categories" />
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
          <CustomButton isDisabled={isLoading}>Submit article</CustomButton>
        </Flex>
      </Flex>
    </form>
  );
};
