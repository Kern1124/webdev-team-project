import { Card } from "@chakra-ui/card";
import { BoxProps } from "@chakra-ui/layout";
import { ReactElement } from "react";

interface LinkWrapper {
  children: ReactElement<BoxProps> | ReactElement<BoxProps>[] | string;
  onClick?: () => void;
}

export const LinkWrapper = ({ children, onClick }: LinkWrapper) => {
  return (
    <Card
      color="secondaryLight"
      _hover={{ color: "secondary" }}
      _active={{ bgColor: "secondary", color: "secondaryLight" }}
      p="0.5rem"
      h="2.5rem"
      justify="center"
      align="center"
      bgColor="main"
      onClick={onClick}
    >
      {children}
    </Card>
  );
};
