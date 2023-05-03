import { Button } from "@chakra-ui/button";

interface UserFormButtonProps {
  children: string;
}

export const UserFormButton = ({ children }: UserFormButtonProps) => {
  return (
    <Button
      w="100%"
      bgColor="main"
      color="secondaryLight"
      _hover={{ bgColor: "mainLight" }}
      _active={{ bgColor: "secondary" }}
      type="submit"
    >
      {children}
    </Button>
  );
};
