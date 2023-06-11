import { CommentType } from "../types/comment";
import { useMemo } from "react";
import { CommentItem } from "./CommentItem";
import { Flex } from "@chakra-ui/layout";

interface CommentListProps {
  comments: CommentType[] | undefined;
}

export const CommentList = ({ comments }: CommentListProps) => {
  const mappedComments = useMemo(() => {
    if (comments == null) {
      return [];
    }

    return comments?.map((comment) => {
      return (
        (
          <CommentItem
            key={comment.id}
            author={comment.author}
            date={comment.createdAt}
          >
            {comment.content}
          </CommentItem>
        ) ?? []
      );
    });
  }, [comments]);

  return <Flex flexDir="column" gap="0.5rem">{mappedComments}</Flex>;
};
