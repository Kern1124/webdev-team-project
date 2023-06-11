import { Text } from "@chakra-ui/layout";

interface SubpageHeadingProp {
  heading: string;
}

export const SubpageHeading = ({ heading }: SubpageHeadingProp) => {
  return (
    <Text fontSize="2xl" fontWeight="bold">
      {heading}
    </Text>
  );
};
