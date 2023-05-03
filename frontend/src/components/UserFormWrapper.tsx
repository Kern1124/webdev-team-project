import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Center, Divider } from "@chakra-ui/layout";
import { ScaleFade } from "@chakra-ui/transition";
import { ReactElement } from "react";
import { BoxProps } from "@chakra-ui/layout";
import { FormControl } from "@chakra-ui/form-control";

interface UserFormWrapperProps {
  heading: string;
  children: ReactElement<BoxProps> | ReactElement<BoxProps>[] | undefined;
}

export const UserFormWrapper = ({
  heading,
  children,
}: UserFormWrapperProps) => {
  return (
    <ScaleFade in={true}>
      <Center marginTop="3.5rem">
        <Card borderRadius="0.1rem" p="3rem" w="30rem" color="main">
          <CardHeader fontSize="3xl">{heading}</CardHeader>
          <Divider bgColor="main" />
          <CardBody marginTop="1rem">
            <FormControl>{children}</FormControl>
          </CardBody>
        </Card>
      </Center>
    </ScaleFade>
  );
};
