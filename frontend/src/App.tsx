import { Flex, Spacer } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { ResponsiveStack } from './components/ResponsiveStack';
import { RouteLink } from './components/RouteLink';
import { SearchLink } from './components/SeachLink';

function App() {
  return (
    <>
      <Flex
        w="100%"
        bgColor="mainLight"
        color="secondaryLight"
        padding="2rem"
        flexDir={{ base: "column", md: "row" }}
        paddingLeft={{ base: "4rem", md: "2rem" }}
        paddingRight={{ base: "4rem", md: "2rem" }}
        justify="flex-start"
        gap="0.5rem"
      >
        <ResponsiveStack>
          <RouteLink to="/newspapers">Newspapers</RouteLink>
          <RouteLink to="/newspapers">Newspapers</RouteLink>
        </ResponsiveStack>
        <Spacer />
        <ResponsiveStack>
          <RouteLink to="/singup">Sing up</RouteLink>
          <RouteLink to="/login">Log in</RouteLink>
          <SearchLink placeholder="Search articles" to="/articles" />
        </ResponsiveStack>
      </Flex>

      <Routes>
        <Route index path="/" />
        <Route path="/newspapers" />
        <Route path="/singup" />
        <Route path="/login" />
        <Route path="/articles" />
      </Routes>
    </>
  );
}

export default App;
