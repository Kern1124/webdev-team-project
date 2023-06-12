import { Flex, Text } from "@chakra-ui/layout";

interface CommentHeaderProps {
  author: string;
  date: Date;
}

export const CommentHeader = ({ author, date }: CommentHeaderProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB");

  return (
    <Flex flexDir="row" gap="0.3rem" alignItems="center">
      <Text>{author}</Text>
      <Text fontSize="sm" color="gray">
        {formattedDate}
      </Text>
    </Flex>
  );
};
