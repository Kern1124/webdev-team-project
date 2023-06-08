import { Button } from "@chakra-ui/button";
import { Spinner } from "@chakra-ui/spinner";

interface UserFormButtonProps {
  children: string;
  isDisabled: boolean;
}

export const UserFormButton = ({ children, isDisabled }: UserFormButtonProps) => {
  return (
    <Button
      w="100%"
      bgColor="main"
      color="secondaryLight"
      _hover={{ bgColor: "mainLight" }}
      _active={{ bgColor: "secondary" }}
      type="submit"
      disabled={isDisabled}
    >
      {!isDisabled && children}
      {isDisabled && <Spinner />}
    </Button>
  );
};
