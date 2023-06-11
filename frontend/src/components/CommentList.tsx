import { CommentType } from "../types/comment";
import { useCallback, useMemo, useState } from "react";
import { CommentItem } from "./CommentItem";
import { Center, Flex } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import { CustomButton } from "./CustomButton";
interface CommentListProps {
  comments: CommentType[] | undefined;
}

export const CommentList = ({ comments }: CommentListProps) => {
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
            author={comment.author}
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

  return (
    <>
      <Collapse in={isShown} startingHeight="20rem">
        <Flex flexDir="column" gap="0.5rem">
          {mappedComments}
        </Flex>
      </Collapse>
      <Center>
        <CustomButton onClickHandler={clickHandler} width="10rem">
          {isShown ? "Show less" : "Show more"}
        </CustomButton>
      </Center>
    </>
  );
};
