import { Card } from "@chakra-ui/card";
import { Box, Flex } from "@chakra-ui/layout";
import { CommentHeader } from "./CommentHeader";

interface CommentItemProps {
  author: string;
  children: string;
  date: string;
}

export const CommentItem = ({ author, children, date }: CommentItemProps) => {
  return (
    <Card p="1rem" borderRadius="2rem" boxShadow="none" bgColor="light">
      <Flex flexDir="column" gap="1rem">
        <CommentHeader author={author} date={date} />
        <Box>{children}</Box>
      </Flex>
    </Card>
  );
};
