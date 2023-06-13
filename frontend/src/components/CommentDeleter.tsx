import { Icon } from "@chakra-ui/icon";
import { Box, Center } from "@chakra-ui/layout";
import { AxiosError } from "axios";
import { useCallback } from "react";
import { FaTrashAlt } from "react-icons/fa";

import { useDeleteComment } from "../hooks/useDeleteComment";
import { useErrorToast } from "../hooks/useErrorToast";
import { ErrorResponseType } from "../types/response";
import { ConfirmationPopover } from "./ConfirmationPopover";

interface CommentDeleterProps {
  id: string;
}

export const CommentDeleter = ({ id }: CommentDeleterProps) => {
  const { deleteComment } = useDeleteComment(id);
  const toast = useErrorToast();

  const clickHandler = useCallback(async () => {
    try {
      await deleteComment();
    } catch (e) {
      const data = (e as AxiosError)?.response?.data as ErrorResponseType;
      toast(data?.message);
    }
  }, [deleteComment, toast]);

  return (
    <ConfirmationPopover
      content="Are you sure you want to delete the comment?"
      confirmHandler={clickHandler}
    >
      <Box
        color="gray"
        _hover={{ color: "black" }}
        marginRight="1rem"
        padding="0.3rem"
      >
        <Center>
          <Icon as={FaTrashAlt} />
        </Center>
      </Box>
    </ConfirmationPopover>
  );
};
