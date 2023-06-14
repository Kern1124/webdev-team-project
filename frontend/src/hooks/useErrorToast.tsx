import { useToast } from "@chakra-ui/toast";
import { useCallback } from "react";

export const useErrorToast = () => {
  const genericToast = useToast();

  const toast = useCallback(
    (message: string) => {
      genericToast({
        title: "Error",
        description: message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
    [genericToast]
  );

  return toast;
};
