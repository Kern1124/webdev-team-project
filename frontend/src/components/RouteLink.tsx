import { Link } from "@chakra-ui/layout";
import { Card } from "@chakra-ui/card";
import { NavLink } from "react-router-dom";
import { ReactElement } from "react";
import { BoxProps } from "@chakra-ui/react";

interface RouteLinkProps {
  children: string | ReactElement<BoxProps>;
  to: string;
}

export const RouteLink = ({ children, to }: RouteLinkProps) => {
  return (
    <Link as={NavLink} to={to} style={{ textDecoration: "none" }}>
      <Card
        color="secondaryLight"
        _hover={{ color: "secondary" }}
        _active={{ bgColor: "secondary", color: "secondaryLight" }}
        p="0.5rem"
        h="2.5rem"
        justify="center"
        align="center"
        bgColor="main"
      >
        {children}
      </Card>
    </Link>
  );
};
