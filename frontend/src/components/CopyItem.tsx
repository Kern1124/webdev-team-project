import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { ApprovalAction } from "./ApprovalAction";
import { ArticleListCollapse } from "./ArticleListCollapse";
import { Authorized } from "./Authorized";
import { Copy } from "../types/copy";

export const CopyItem = ({
  id,
  date,
  articles,
  published,
  isPublishable,
}: Copy) => {
  const { isOpen, onToggle } = useDisclosure();
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
        flexDir="row"
      >
        <Box>{formattedDate}</Box>
        <Box alignSelf="center" onClick={(e) => e.stopPropagation()}>
          <Authorized
            role={"DIRECTOR"}
            condition={published === false && isPublishable === true}
          >
            <ApprovalAction
              approveName="Approve"
              discardName="Discard"
              approveUrl={`/copies/${id}/approve`}
              discardUrl={`/copies/${id}/discard`}
            />
          </Authorized>
        </Box>
      </Flex>
      <ArticleListCollapse isOpen={isOpen} articles={articles} />
    </Box>
  );
};
