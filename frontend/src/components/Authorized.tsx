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

  if (
    (condition != null && !condition) ||
    !auth ||
    (id && auth.items.id !== id)
  ) {
    return null;
  }

  if (
    (auth.items.length === 0 && role === "GUEST") ||
    auth.items.includes(role)
  ) {
    return <>{children}</>;
  }

  return null;
};
