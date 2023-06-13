import { Flex, Text } from "@chakra-ui/layout";
import { CommentDeleter } from "./CommentDeleter";
import { Authorized } from "./Authorized";

interface CommentHeaderProps {
  id: string;
  author: string;
  date: Date;
}

export const CommentHeader = ({ author, date, id }: CommentHeaderProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB");

  return (
    <Flex justifyContent="space-between" alignItems="center" flexDir="row">
      <Flex flexDir="row" gap="0.3rem" alignItems="center">
        <Text>{author}</Text>
        <Text fontSize="sm" color="gray">
          {formattedDate}
        </Text>
      </Flex>
      <Authorized role="JOURNALIST" >
        <CommentDeleter id={id} />
      </Authorized>
    </Flex>
  );
};
