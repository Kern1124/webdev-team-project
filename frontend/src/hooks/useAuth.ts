import { useQuery } from "@tanstack/react-query";
import { userAuth } from "../api/requests";

export const useAuth = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["auth"],
    retry: false,
    queryFn: () => userAuth(),
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });

  return { auth: data, isLoading, isError };
};
