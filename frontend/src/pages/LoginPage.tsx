import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';

import { FormInput } from '../components/FormInput';
import { UserFormWrapper } from '../components/UserFormWrapper';
import { useLogin } from '../hooks/useLogin';
import { UserFormType } from '../types/user';
import { UserSchema } from '../yup/schemata';

export const LoginPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormType>({ resolver: yupResolver(UserSchema) });
  const { login, isLoading, isError, data } = useLogin({ redirect: "/" });

  const onSubmit: SubmitHandler<UserFormType> = useCallback(
    async (data) => {
      login(data);
      if (isError) {
        // use data to show an error here
      }
      reset();
    },
    [reset, login, isError]
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
