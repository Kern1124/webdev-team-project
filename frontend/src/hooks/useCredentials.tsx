import { useAuth } from "./useAuth";

export const useCredentials = () => {
  const { auth } = useAuth();

  return {
    id: auth?.items?.id ?? "",
    email: auth?.items?.email ?? "",
    username: auth?.items?.username ?? "",
  };
};
