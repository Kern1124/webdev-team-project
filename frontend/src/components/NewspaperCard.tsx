import { Card } from "@chakra-ui/card";
import { Flex, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import { useCallback } from "react";

interface NewspaperCardProps {
  title: string;
  publisher: string
  onClickUrl: string;
}

export const NewspaperCard = ({ title, publisher, onClickUrl }: NewspaperCardProps) => {
  const navigate = useNavigate();
  const onClickHandle = useCallback(
    () => navigate(onClickUrl),
    [onClickUrl, navigate]
  );

  return (
    <Flex alignItems="center" h="100%" flexDir="column">
      <Card
        bgColor="main"
        marginBottom="1.5rem"
        h={{ base: "30rem", md: "20rem" }}
        w="100%"
        borderRadius={0}
        onClick={onClickHandle}
      ></Card>
      <Text>{title}</Text>
      <Text color="mainLight" fontSize="sm">{publisher}</Text>
    </Flex>
  );
};
