import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogin } from "../api/requests";
import { useNavigate } from "react-router-dom";
import { UserFormType } from "../types/user";

type UseLoginProps = {
  redirect: string;
};

export const useLogin = ({ redirect }: UseLoginProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutateAsync: login,
    isLoading,
    isError,
    data,
  } = useMutation({
    mutationFn: (data: UserFormType) => userLogin(data),
    retry: false,
    onSuccess: () => {
      navigate(redirect);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      queryClient.invalidateQueries({ queryKey: ["newspaper"] });
      queryClient.invalidateQueries({ queryKey: ["copies"] });
      queryClient.invalidateQueries({ queryKey: ["article"] });
    },
  });

  return { login, isLoading, isError, data };
};
