import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";

import { FormInput } from "../components/FormInput";
import { UserFormWrapper } from "../components/UserFormWrapper";
import { useLogin } from "../hooks/useLogin";
import { ErrorResponseType } from "../types/response";
import { UserFormType } from "../types/user";
import { UserSchema } from "../yup/schemata";
import { useErrorToast } from "../hooks/useErrorToast";

export const LoginPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormType>({ resolver: yupResolver(UserSchema) });
  const { login, isLoading } = useLogin({ redirect: "/" });
  const toast = useErrorToast()

  const onSubmit: SubmitHandler<UserFormType> = useCallback(
    async (data) => {
      try {
        await login(data);
      } catch (e) {
        const data = (e as AxiosError)?.response?.data as ErrorResponseType;
        toast(data?.message);
      }
      reset();
    },
    [reset, login, toast]
  );
  return (
    <UserFormWrapper
      buttonIsDisabled={isLoading}
      buttonLabel="LOGIN"
      heading="Login"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        {...register("username")}
        placeholder="Type in your username"
        icon={AiOutlineUser}
        errorMessage={errors.username?.message}
      >
        Username
      </FormInput>
      <FormInput
        {...register("password")}
        placeholder="Type in your password"
        inputType="password"
        icon={AiOutlineLock}
        errorMessage={errors.password?.message}
      >
        Password
      </FormInput>
    </UserFormWrapper>
  );
};
