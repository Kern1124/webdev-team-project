import { Spacer, Text } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { ResponsiveHeader } from './components/ResponsiveHeader';
import { ResponsiveStack } from './components/ResponsiveStack';
import { RouteLink } from './components/RouteLink';
import { SearchLink } from './components/SeachLink';

function App() {
  return (
    <>
      <ResponsiveHeader>
        <ResponsiveStack>
          <RouteLink to="/newspapers">Newspapers</RouteLink>
          <RouteLink to="/newspapers">Newspapers</RouteLink>
        </ResponsiveStack>
        <Spacer />
        <ResponsiveStack>
          <RouteLink to="/signup">Sign up</RouteLink>
          <RouteLink to="/login">Log in</RouteLink>
          <SearchLink placeholder="Search articles" to="/articles" />
        </ResponsiveStack>
      </ResponsiveHeader>
      <Routes>
        <Route index path="/" />
        <Route path="/newspapers" />
        <Route path="/signup" />
        <Route path="/login" />
        <Route path="/articles" />
      </Routes>
    </>
  );
}

export default App;
