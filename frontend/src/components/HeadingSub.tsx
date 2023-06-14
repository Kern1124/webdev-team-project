import { Box, Text } from "@chakra-ui/layout";

interface HeadingsSubProps {
  heading: string;
  subheading: string;
}

export const HeadingSub = ({ heading, subheading }: HeadingsSubProps) => {
  return (
    <Box>
      <Text>{heading}</Text>
      <Text color="mainLight" fontSize="sm">
        {subheading}
      </Text>
    </Box>
  );
};
