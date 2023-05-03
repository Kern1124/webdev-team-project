import { Box } from "@chakra-ui/layout";
import { Route, Routes } from "react-router-dom";
import { SignupPage } from "../pages/SignupPage";

export const RoutingContent = () => {
  return (
    <Box padding="2rem">
      <Routes>
        <Route index path="/" />
        <Route path="/newspapers" />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" />
        <Route path="/articles" />
      </Routes>
    </Box>
  );
};
