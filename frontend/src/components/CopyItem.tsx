import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { ApprovalAction } from "./ApprovalAction";
import { ArticleListCollapse } from "./ArticleListCollapse";
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

  return (
    <Box cursor="pointer" mb={4}>
      <Flex
        justify="space-between"
        align="center"
        bg="secondary"
        color="main"
        fontSize="1.5rem"
        fontWeight="bold"
        p={2}
        borderRadius="md"
        onClick={onToggle}
      >
        <Box>{formattedDate}</Box>
        <Box>
          {published === false && userRole === "DIRECTOR" && (
            <ApprovalAction
              approve={{ name: "Approve", link: "/approve-link" }}
              discard={{ name: "Discard", link: "/discard-link" }}
            />
          )}
        </Box>
      </Flex>
      <ArticleListCollapse isOpen={isOpen} articles={articles} />
    </Box>
  );
};