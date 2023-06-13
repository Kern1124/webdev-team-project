import { Button } from "@chakra-ui/button";
import { BoxProps } from "@chakra-ui/layout";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { Portal } from "@chakra-ui/portal";
import { ReactElement } from "react";

interface ConfirmationPopoverProps {
  content: string;
  children: ReactElement<BoxProps>;
  confirmHandler: () => void;
}

export const ConfirmationPopover = ({
  children,
  content,
  confirmHandler,
}: ConfirmationPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent borderColor="main">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>{content}</PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <Button colorScheme="red" onClick={confirmHandler}>
              Delete
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
