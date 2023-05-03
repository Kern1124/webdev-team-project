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
        _hover={{bgColor: "secondary"}}
        _active={{color: "main"}}
        p="0.5rem"
        h="2.5rem"
        justify="center"
        align="center"
        color="secondaryLight"
        bgColor="main"
      >
        {children}
      </Card>
    </Link>
  );
};
