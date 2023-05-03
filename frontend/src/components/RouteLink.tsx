import { Link } from "@chakra-ui/layout";
import { Card } from "@chakra-ui/card";
import { NavLink } from "react-router-dom";

interface RouteLinkProps {
  children: string;
  to: string;
}

interface StyleProps {
    isActive: boolean
}

interface StyleObject {
    color: string,
    textDecoration: string
}


export const RouteLink = ({ children, to }: RouteLinkProps) => {
  return (
    <Link
      as={NavLink}
      to={to}
      style={{ textDecoration: "none"}} 
    >   <Card p="0.5rem" color="secondaryLight" bgColor="main" >
      {children}
      </Card>
    </Link>
  );
};
