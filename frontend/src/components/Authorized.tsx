import { BoxProps } from "@chakra-ui/react";
import { ReactNode, ReactElement } from "react";
import { useAuth } from "../hooks/useAuth";

interface AuthorizedProps {
  role: "MANAGER" | "DIRECTOR" | "JOURNALIST" | "GUEST";
  children:
    | ReactElement<BoxProps>
    | ReactElement<BoxProps>[]
    | undefined
    | ReactNode;
  condition?: boolean;
  id?: string;
}

export const Authorized = ({
  children,
  role,
  condition,
  id,
}: AuthorizedProps) => {
  const { auth } = useAuth();
  console.log(auth)
  if (
    (condition != null && !condition) ||
    !auth ||
    (id && auth.items.userId !== id)
  ) {
    return null;
  }

  if (
    (auth.items.roles.length === 0 && role === "GUEST") ||
    auth.items.roles.includes(role)
  ) {
    return <>{children}</>;
  }

  return null;
};
