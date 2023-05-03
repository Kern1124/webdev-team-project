import { Spacer } from "@chakra-ui/react";

import { ResponsiveHeader } from "./components/ResponsiveHeader";
import { ResponsiveStack } from "./components/ResponsiveStack";
import { RouteLink } from "./components/RouteLink";
import { RoutingContent } from "./components/RoutingContent";
import { SearchLink } from "./components/SeachLink";

const App = () => {
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
      <RoutingContent />
    </>
  );
};

export default App;
