import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';

import { FormInput } from '../components/FormInput';
import { UserFormWrapper } from '../components/UserFormWrapper';
import { useSignup } from '../hooks/useSignup';
import { ErrorResponseType } from '../types/response';
import { UserSignupFormType } from '../types/user';
import { UserSignupSchema } from '../yup/schemata';

export const SignupPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignupFormType>({ resolver: yupResolver(UserSignupSchema) });
  const { signup, isLoading } = useSignup({
    redirect: "/login",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<UserSignupFormType> = useCallback(
    async (data) => {
      try {
        await signup(data);
      } catch (e) {
        const data = (e as AxiosError)?.response?.data as ErrorResponseType;
        setErrorMessage(data?.message);
      }
      reset();
    },
    [reset, signup]
  );
  return (
    <UserFormWrapper
      buttonIsDisabled={isLoading}
      buttonLabel="SIGN UP"
      heading="Sign up"
      onSubmit={handleSubmit(onSubmit)}
      errorMessage={errorMessage}
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
