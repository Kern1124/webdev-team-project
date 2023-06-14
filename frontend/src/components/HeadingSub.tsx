import { Box, Text } from "@chakra-ui/layout";

interface HeadingsSubProps {
  heading: string;
  subheading: string;
  alignLeft: boolean;
}

export const HeadingSub = ({
  heading,
  subheading,
  alignLeft,
}: HeadingsSubProps) => {
  return (
    <Box textAlign={alignLeft ? "left" : "center"}>
      <Text>{heading}</Text>
      <Text color="mainLight" fontSize="sm">
        {subheading}
      </Text>
    </Box>
  );
};
