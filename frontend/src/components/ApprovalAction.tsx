import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useCallback } from "react";

type ApprovalActionProps = {
  approve: {
    name: string;
    link: string;
  };
  discard: {
    name: string;
    link: string;
  };
}

export const ApprovalAction = ({ approve, discard }: ApprovalActionProps) => {
  const navigate = useNavigate();
  
  const handleApprove = useCallback(() => {
    navigate(approve.link);
  }, [approve, navigate]);
  
  const handleDiscard = useCallback(() => {
    navigate(discard.link);
  }, [discard, navigate]);

  return (
    <Box mt={2}>
      <Button onClick={handleApprove} bgColor="green" colorScheme="green" variant="outline" size="sm" mr={2}>
        {approve.name}
      </Button>
      <Button onClick={handleDiscard} bgColor="red" colorScheme="red" variant="outline" size="sm">
        {discard.name}
      </Button>
    </Box>
  );
};
