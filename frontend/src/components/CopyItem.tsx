import { Box, Button, Flex, Collapse, useDisclosure } from "@chakra-ui/react";
import { ArticleList } from "./ArticleList";
import { useAuth } from "../hooks/useAuth";
import { Article } from "../types/article";

interface CopyItemProps {
  date: string;
  articles: Article[];
  published?: boolean;
}

export const CopyItem = ({ date, articles, published }: CopyItemProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const { auth } = useAuth();
  
  const userRole = auth.item.userRole;
  const formattedDate = new Date(date).toLocaleDateString("en-GB");
  console.log(userRole)
  console.log(published)
  return (
    <Box cursor="pointer" mb={4}>
      <Flex
        justify="space-between"
        align="center"
        bg="secondary"
        color="main"
        fontSize={25}
        fontWeight="bold"
        p={2}
        borderRadius="md"
        onClick={onToggle}
      >
        <Box>{formattedDate}</Box>
        <Flex>
          {published === false && userRole === "DIRECTOR" && (
            <>
              <Button mr={2} colorScheme="green" color="secondaryLight">
                Approve copy
              </Button>
              <Button colorScheme="red" color="secondaryLight">
                Refuse copy
              </Button>
            </>
          )}
        </Flex>
      </Flex>
      <Collapse in={isOpen}>
        <Box bg="white" color="main" fontSize={20} p={2} borderRadius="md">
          <ArticleList articles={articles} />
        </Box>
      </Collapse>
    </Box>
  );
};