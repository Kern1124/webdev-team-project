import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Center } from "@chakra-ui/layout";
import { ScaleFade } from "@chakra-ui/transition";
import { ReactElement } from "react";
import { BoxProps } from "@chakra-ui/layout";

interface UserFormWrapperProps {
    heading: string,
    children: ReactElement<BoxProps> | ReactElement<BoxProps>[] | undefined
}

export const UserFormWrapper = ({heading, children}: UserFormWrapperProps) => {
  return (
    <ScaleFade in={true}>
      <Center marginTop="3.5rem">
        <Card p="1.5rem" w="40rem" color="main">
          <CardHeader fontSize="3xl">{heading}</CardHeader>
          <CardBody>{children}</CardBody>
        </Card>
      </Center>
    </ScaleFade>
  );
};
