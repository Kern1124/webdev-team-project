import { Textarea } from "@chakra-ui/textarea";
import { Flex } from "@chakra-ui/layout";
import { useAddComment } from "../hooks/useAddComment";
import { ChangeEvent, useCallback, useState } from "react";
import { CustomButton } from "./CustomButton";
import { AxiosError } from "axios";
import { ErrorResponseType } from "../types/response";
import { useErrorToast } from "../hooks/useErrorToast";

interface CommentSubmitProps {
  buttonLabel: string;
  articleId: string;
}

export const CommentSubmit = ({
  buttonLabel,
  articleId,
}: CommentSubmitProps) => {
  const { submit, isLoading } = useAddComment();
  const [content, setContent] = useState<string>();
  const toast = useErrorToast();

  const changeHandler = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const submitHandler = useCallback(async () => {
    try {
      await submit({ articleId, content: content ?? "" });
      setContent("");
    } catch (e) {
      const data = (e as AxiosError)?.response?.data as ErrorResponseType;
      toast(data?.message)
    }
  }, [articleId, content, submit, toast]);

  return (
    <Flex flexDir="column" gap="0.5rem">
      <Textarea
        placeholder="Submit your own comment..."
        bgColor="light"
        variant="filled"
        focusBorderColor="main"
        value={content}
        onChange={changeHandler}
      />
      <CustomButton onClickHandler={submitHandler} isDisabled={isLoading}>
        {buttonLabel}
      </CustomButton>
    </Flex>
  );
};
