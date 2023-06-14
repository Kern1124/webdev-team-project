import { Button } from "@chakra-ui/button";
import { BoxProps } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { ReactElement } from "react";

interface CustomButtonProps {
  isDisabled?: boolean;
  children: ReactElement<BoxProps> | ReactElement<BoxProps>[] | string;
  onClickHandler?: () => void;
  width?: string;
}

export const CustomButton = ({
  isDisabled,
  children,
  onClickHandler,
  width,
}: CustomButtonProps) => {
  const label = isDisabled != null && isDisabled ? <Spinner /> : children;

  return (
    <Button
      w={width ?? "100%"}
      bgColor="main"
      color="secondaryLight"
      _hover={{ bgColor: "mainLight" }}
      _active={{ bgColor: "secondary" }}
      type="submit"
      disabled={isDisabled}
      onClick={onClickHandler}
    >
      {label}
    </Button>
  );
};
