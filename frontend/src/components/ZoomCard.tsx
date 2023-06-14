import { Card } from "@chakra-ui/card";
import { BoxProps } from "@chakra-ui/layout";
import { ReactElement } from "react";

interface ZoomCardProps {
  onClickHandle: () => void;
  children: ReactElement<BoxProps>[] | ReactElement<BoxProps> | undefined;
}

export const ZoomCard = ({ children, onClickHandle }: ZoomCardProps) => {
  return (
    <Card
      bgColor="main"
      marginBottom="1.5rem"
      h={{ base: "30rem", md: "20rem" }}
      w="100%"
      borderRadius={0}
      onClick={onClickHandle}
      _hover={{
        transform: "scale(1.1)",
        cursor: "pointer",
      }}
    >
      {children}
    </Card>
  );
};
