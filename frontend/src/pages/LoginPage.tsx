import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { FormInput } from "../components/FormInput";
import { UserFormWrapper } from "../components/UserFormWrapper";
import { UserFormType } from "../types/user";
import { UserSchema } from "../yup/schemata";
import { useCallback } from "react";

export const LoginPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormType>({ resolver: yupResolver(UserSchema) });

  const onSubmit: SubmitHandler<UserFormType> = useCallback(
    async (data) => {
      console.log(data);
      reset();
    },
    [reset]
  );
  return (
    <UserFormWrapper
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
