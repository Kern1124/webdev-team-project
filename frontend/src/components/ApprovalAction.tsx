import { Box } from "@chakra-ui/react";
import { useApproval } from "../hooks/useApproval";
import { useCallback } from "react";
import { CustomButton } from "./CustomButton";

type ApprovalActionProps = {
  approveName: string;
  discardName: string;
  approveUrl: string;
  discardUrl: string;
}

export const ApprovalAction = ({ approveName, discardName, approveUrl, discardUrl }: ApprovalActionProps) => {
  const { approval } = useApproval();

  const handleApprove = useCallback(() => {
    approval(approveUrl);
  }, [approval, approveUrl]);

  const handleDiscard = useCallback(() => {
    approval(discardUrl);
  }, [approval, discardUrl]);

  return (
    <Box display="flex" alignItems="center">
      <Box mr="1rem">
        <CustomButton onClickHandler={handleApprove}>
          {approveName}
        </CustomButton>
      </Box>
      <CustomButton onClickHandler={handleDiscard}>
        {discardName}
      </CustomButton>
    </Box>
  );
};