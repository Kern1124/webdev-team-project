import { Box, Flex } from "@chakra-ui/react";
import { useApproval } from "../hooks/useApproval";
import { useCallback } from "react";
import { CustomButton } from "./CustomButton";
import { AxiosError } from "axios";
import { ErrorResponseType } from "../types/response";
import { useSuccessToast } from "../hooks/useSuccessToast";
import { useErrorToast } from "../hooks/useErrorToast";

type ApprovalActionProps = {
  approveName: string;
  discardName: string;
  approveUrl: string;
  discardUrl: string;
};

export const ApprovalAction = ({
  approveName,
  discardName,
  approveUrl,
  discardUrl,
}: ApprovalActionProps) => {
  const { approval } = useApproval();
  const successToast = useSuccessToast()
  const toast = useErrorToast()

  const sendApproval = useCallback(async (url: string) => {
    try {
        await approval(url);
        successToast("Operation succesful")
      } catch (e) {
        const data = (e as AxiosError)?.response?.data as ErrorResponseType;
        toast(data?.message);
      }
  }, [approval, toast, successToast])


  const handleApprove = useCallback(() => {
    sendApproval(approveUrl);
  }, [sendApproval, approveUrl]);

  const handleDiscard = useCallback(() => {
    sendApproval(discardUrl);
  }, [sendApproval, discardUrl]);

  return (
    <Flex flexDir={{ base: "column", md: "row" }} gap="0.5rem">
      <CustomButton onClickHandler={handleApprove}>{approveName}</CustomButton>
      <CustomButton onClickHandler={handleDiscard}>{discardName}</CustomButton>
    </Flex>
  );
};
