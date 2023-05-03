import { Flex, Stack } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { RouteLink } from './components/RouteLink';
import { SearchLink } from './components/SeachLink';

function App() {
  return (
    <>
      <Flex
        w="100%"
        bgColor="mainLight"
        color="secondaryLight"
        justify="space-between"
        align="center"
        padding="2rem"
      >
        <Stack direction="row" gap="4rem">
          <RouteLink to="/newspapers">Newspapers</RouteLink>
        </Stack>
        <Stack direction="row" gap="1.8rem">
          <RouteLink to="/singup">Sing up</RouteLink>
          <RouteLink to="/login">Log in</RouteLink>
          <SearchLink placeholder="Search articles" to="/articles" />
        </Stack>
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
