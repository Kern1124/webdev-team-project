import { Td, Th, Tr } from "@chakra-ui/table";

import { SimpleTable } from "../components/SimpleTable";
import { SubpageHeading } from "../components/SubpageHeading";
import { useCredentials } from "../hooks/useCredentials";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@chakra-ui/spinner";
import { ArticleList } from "../components/ArticleList";
import { useMemo } from "react";
import { getUsersArticles } from "../api/requests";
import { Card } from "@chakra-ui/card";
import { Center } from "@chakra-ui/layout";

export const ProfilePage = () => {
  const { email, username } = useCredentials();

  const { data, isLoading } = useQuery({
    queryKey: ["article"],
    queryFn: getUsersArticles,
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
  });

  const articles = useMemo(() => data?.items ?? [], [data]);

  const renderedContent = isLoading ? (
    <Center>
      <Spinner />
    </Center>
  ) : (
    <ArticleList articles={articles} />
  );

  return (
    <>
      <SubpageHeading heading="User information" />
      <SimpleTable>
        <Tr>
          <Th>Username</Th>
          <Td>{username}</Td>
        </Tr>
        <Tr>
          <Th>Email</Th>
          <Td>{email}</Td>
        </Tr>
      </SimpleTable>
      <SubpageHeading heading="Submitted articles" />
      <Card pt="1rem" pb="1rem">
        {renderedContent}
      </Card>
    </>
  );
};
