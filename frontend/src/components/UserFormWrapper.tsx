import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { Center, Divider } from "@chakra-ui/layout";
import { ScaleFade } from "@chakra-ui/transition";
import { ReactElement } from "react";
import { BoxProps } from "@chakra-ui/layout";
import { FormControl } from "@chakra-ui/form-control";
import { UserFormButton } from "./UserFormButton";

interface UserFormWrapperProps {
  heading: string;
  buttonLabel: string;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  children: ReactElement<BoxProps> | ReactElement<BoxProps>[] | undefined;
}

export const UserFormWrapper = ({
  heading,
  children,
  buttonLabel,
  onSubmit,
}: UserFormWrapperProps) => {
  return (
    <ScaleFade in={true}>
      <Center marginTop="1.8rem">
        <Card
          marginBottom="5rem"
          bgColor="light"
          borderRadius="0.1rem"
          p={{ base: "1.5rem", md: "3rem" }}
          w="30rem"
          color="main"
        >
          <CardHeader fontSize="3xl">{heading}</CardHeader>
          <Divider bgColor="main" />
          <CardBody marginTop="1rem">
            <form onSubmit={onSubmit}>
              <FormControl>{children}</FormControl>
            </form>
          </CardBody>
          <CardFooter>
            <UserFormButton>{buttonLabel}</UserFormButton>
          </CardFooter>
        </Card>
      </Center>
    </ScaleFade>
  );
};
