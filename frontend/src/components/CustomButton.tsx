import { Button } from "@chakra-ui/button";
import { BoxProps } from "@chakra-ui/layout";
import { ReactElement } from "react";

interface CustomButtonProps {
  isDisabled?: boolean;
  children: ReactElement<BoxProps> | ReactElement<BoxProps>[] | string;
  onClickHandler?: () => void;
}

export const CustomButton = ({ isDisabled, children, onClickHandler }: CustomButtonProps) => {
  return (
    <Button
      w="100%"
      bgColor="main"
      color="secondaryLight"
      _hover={{ bgColor: "mainLight" }}
      _active={{ bgColor: "secondary" }}
      type="submit"
      disabled={isDisabled}
      onClick={onClickHandler}
    >
      {children}
    </Button>
  );
};
