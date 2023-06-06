import { Box } from "@chakra-ui/layout";
import { Route, Routes } from "react-router-dom";
import { SignupPage } from "../pages/SignupPage";
import { LoginPage } from "../pages/LoginPage";
import { PrivateRouting } from "./PrivateRouting";

export const RoutingContent = () => {
  return (
    <Box padding="2rem" marginTop="5rem">
      <Routes>
        <Route index path="/" />
        <Route path="/newspapers" />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/articles" />
        <Route path="/auth/*" Component={PrivateRouting} />
      </Routes>
    </Box>
  );
};
