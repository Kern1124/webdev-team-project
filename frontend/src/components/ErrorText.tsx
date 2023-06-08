import { Text } from "@chakra-ui/layout";

interface ErrorTextProps {
  message?: string | null;
}

export const ErrorText = ({ message }: ErrorTextProps) => {
  return (
    <Text marginBottom="1rem" fontSize="sm" color="error">
      {message ?? ""}
    </Text>
  );
};
