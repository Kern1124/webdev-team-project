import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogout } from "../api/requests";
import { useNavigate } from "react-router-dom";

type UseLoginProps = {
  redirect: string;
};

const useLogout = ({ redirect }: UseLoginProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutateAsync: logout,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: () => userLogout(),
    onSuccess: () => {
      navigate(redirect);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      queryClient.invalidateQueries({ queryKey: ["newspaper"] });
      queryClient.invalidateQueries({ queryKey: ["copies"] });
      queryClient.invalidateQueries({ queryKey: ["article"] });
    },
  });

  return { logout, isLoading, isError };
};

export default useLogout;
