import { Spacer } from "@chakra-ui/react";

import { ResponsiveHeader } from "./components/ResponsiveHeader";
import { ResponsiveStack } from "./components/ResponsiveStack";
import { RouteLink } from "./components/RouteLink";
import { RoutingContent } from "./components/RoutingContent";
import { SearchLink } from "./components/SeachLink";
import { Authorized } from "./components/Authorized";

const App = () => {
  return (
    <>
      <ResponsiveHeader>
        <ResponsiveStack>
          <RouteLink to="/newspapers">Newspapers</RouteLink>
          <Authorized role="JOURNALIST">
            <RouteLink to="/auth/articles/create">Create article</RouteLink>
          </Authorized>
          <Authorized role="MANAGER">
            <RouteLink to="/auth/articles/submit">Submit article</RouteLink>
          </Authorized>
          <Authorized role="DIRECTOR">
            <RouteLink to="/auth/newspapers/submit">Submit newspapers</RouteLink>
          </Authorized>
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
