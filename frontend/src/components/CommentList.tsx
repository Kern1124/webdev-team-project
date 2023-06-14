import { CommentQueryType } from "../types/comment";
import { useCallback, useMemo, useState } from "react";
import { CommentItem } from "./CommentItem";
import { Center, Flex } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import { CustomButton } from "./CustomButton";
import { Spinner } from "@chakra-ui/spinner";
interface CommentListProps {
  comments: CommentQueryType[] | undefined;
  isLoading: boolean;
}

export const CommentList = ({ comments, isLoading }: CommentListProps) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const mappedComments = useMemo(() => {
    if (comments == null) {
      return [];
    }

    return comments?.map((comment) => {
      return (
        (
          <CommentItem
            key={comment.id}
            id={comment.id}
            authorId={comment.author.id}
            author={comment.author.username}
            date={comment.createdAt}
          >
            {comment.content}
          </CommentItem>
        ) ?? []
      );
    });
  }, [comments]);

  const clickHandler = useCallback(() => {
    setIsShown((prev) => !prev);
  }, []);

  const altContent = isLoading ? <Spinner /> : "No comments";

  return (
    <>
      <Collapse
        in={isShown}
        startingHeight={mappedComments.length > 3 ? "20rem" : "100%"}
      >
        <Flex flexDir="column" gap="0.5rem">
          {mappedComments || altContent}
        </Flex>
      </Collapse>
      <Center>
        {mappedComments.length > 3 && (
          <CustomButton onClickHandler={clickHandler} width="10rem">
            {isShown ? "Show less" : "Show more"}
          </CustomButton>
        )}
      </Center>
    </>
  );
};
