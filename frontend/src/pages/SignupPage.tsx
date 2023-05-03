import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";

import { FormInput } from "../components/FormInput";
import { UserFormWrapper } from "../components/UserFormWrapper";
import { UserSignupFormType } from "../types/user";
import { UserSignupSchema } from "../yup/schemata";
import { useCallback } from "react";

export const SignupPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignupFormType>({ resolver: yupResolver(UserSignupSchema) });

  const onSubmit: SubmitHandler<UserSignupFormType> = useCallback(async (data) => {
    console.log(data)
    reset()
  },[reset])
  return (
    <UserFormWrapper buttonLabel="SIGN UP" heading="Sign up" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        {...register("username")}
        placeholder="Type in your username"
        icon={AiOutlineUser}
        errorMessage={errors.username?.message}
      >
        Username
      </FormInput>
      <FormInput
        {...register("email")}
        placeholder="Type in your email"
        icon={AiOutlineMail}
        errorMessage={errors.email?.message}
      >
        Email
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
