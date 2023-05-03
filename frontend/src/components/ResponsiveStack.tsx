import { Stack } from "@chakra-ui/react";
import { ReactElement } from "react";
import { BoxProps } from "@chakra-ui/react";

interface ResponsiveStackProps {
  children: ReactElement | ReactElement<BoxProps> | ReactElement<BoxProps>[];
}

export const ResponsiveStack = ({ children }: ResponsiveStackProps) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      gap={{ base: "0.5rem", md: "2rem" }}
    >
      {children}
    </Stack>
  );
};
