import { Card } from "@chakra-ui/card";
import { Box, Flex } from "@chakra-ui/layout";
import { CommentHeader } from "./CommentHeader";

interface CommentItemProps {
  id: string;
  authorId: string;
  author: string;
  children: string;
  date: Date;
}

export const CommentItem = ({
  author,
  children,
  date,
  id,
  authorId,
}: CommentItemProps) => {
  return (
    <Card p="1rem" borderRadius="2rem" boxShadow="none" bgColor="light">
      <Flex flexDir="column" gap="1rem">
        <CommentHeader
          authorId={authorId}
          id={id}
          author={author}
          date={date}
        />
        <Box>{children}</Box>
      </Flex>
    </Card>
  );
};
