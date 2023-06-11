import { Card } from "@chakra-ui/card";
import { Flex, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import { useCallback } from "react";

interface NewspaperCardProps {
  title: string;
  publisher: string
  id: string;
}

export const NewspaperCard = ({ title, publisher, id }: NewspaperCardProps) => {
  const navigate = useNavigate();
  const onClickHandle = useCallback(
    () => {
      navigate(`/newspaper/${id}`);
    },
    [id, navigate]
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
        _hover={{
          transform: "scale(1.1)",
          cursor: "pointer",
        }}
      ></Card>
      <Text>{title}</Text>
      <Text color="mainLight" fontSize="sm">{publisher}</Text>
    </Flex>
  );
};
