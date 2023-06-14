import { Text } from "@chakra-ui/layout";

interface SubpageHeadingProp {
  heading: string;
}

export const SubpageHeading = ({ heading }: SubpageHeadingProp) => {
  return (
    <Text fontSize="2xl" mt={{base:"0.3rem", md: "2rem"}} fontWeight="bold">
      {heading}
    </Text>
  );
};
