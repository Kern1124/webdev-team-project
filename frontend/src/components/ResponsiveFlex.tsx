import { BoxProps, Collapse, Flex, useBreakpointValue } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface ResponsiveFlexProps {
  children: ReactElement | ReactElement<BoxProps> | ReactElement<BoxProps>[];
  isHidden: boolean;
}

export const ResponsiveFlex = ({ children, isHidden }: ResponsiveFlexProps) => {
  const variant = useBreakpointValue( {
    md: false,
    base: true,
  }, { ssr: false })
  return (
    <Collapse in={variant ? !isHidden : true}>
      <Flex
        w="100%"
        bgColor="mainLight"
        color="secondaryLight"
        padding="2rem"
        flexDir={{ base: "column", md: "row" }}
        paddingLeft={{ base: "2rem", sm: "6rem", md: "2rem" }}
        paddingRight={{ base: "2rem", sm: "6rem", md: "2rem" }}
        justify="flex-start"
        gap="0.5rem"
        boxShadow="md"
        borderBottomWidth={{base: "0.3rem", md: "0rem"}}
        borderBottomColor="main"
      >
        {children}
      </Flex>
    </Collapse>
  );
};
