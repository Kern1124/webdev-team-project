import { Center } from "@chakra-ui/layout";
import { ReactElement } from "react";
import { BoxProps } from "@chakra-ui/layout";

interface CenteredBannerProps {
  children: string | ReactElement<BoxProps>;
}

export const CenteredBanner = ({ children }: CenteredBannerProps) => {
  return <Center marginTop="10%">{children}</Center>;
};
