import { BoxProps, Center, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ArticleCommentsWrapperProps {
  children: ReactElement | ReactElement<BoxProps> | ReactElement<BoxProps>[];
}

export const ArticleCommentsWrapper = ({
  children,
}: ArticleCommentsWrapperProps) => {
  return (
    <Center flexDir="column">
      <VStack
        alignItems="stretch"
        gap="1.5rem"
        width={{ base: "100%", md: "65%" }}
      >
        {children}
      </VStack>
    </Center>
  );
};
