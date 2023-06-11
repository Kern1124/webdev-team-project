import { Textarea } from "@chakra-ui/textarea";
import { Flex } from "@chakra-ui/layout";
import { CustomButton } from "./CustomButton";

interface CommentSubmitProps {
  buttonLabel: string;
}

export const CommentSubmit = ({ buttonLabel }: CommentSubmitProps) => {
  return (
    <Flex flexDir="column" gap="0.5rem">
      <Textarea
        placeholder="Submit your own comment..."
        bgColor="light"
        variant="filled"
        focusBorderColor="main"
      />
      <CustomButton>{buttonLabel}</CustomButton>
    </Flex>
  );
};
