import { Link } from "@chakra-ui/layout";
import { NavLink } from "react-router-dom";
import { ReactElement } from "react";
import { BoxProps } from "@chakra-ui/react";
import { LinkWrapper } from "./LinkWrapper";

interface RouteLinkProps {
  children: string | ReactElement<BoxProps>;
  to: string;
}

export const RouteLink = ({ children, to }: RouteLinkProps) => {
  return (
    <Link as={NavLink} to={to} style={{ textDecoration: "none" }}>
      <LinkWrapper>{children}</LinkWrapper>
    </Link>
  );
};
