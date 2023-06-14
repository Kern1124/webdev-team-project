import { useToast } from "@chakra-ui/toast";
import { useCallback } from "react";

export const useSuccessToast = () => {
  const genericToast = useToast();

  const toast = useCallback(
    (message: string) => {
      genericToast({
        title: "Success",
        description: message,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    },
    [genericToast]
  );

  return toast;
};
