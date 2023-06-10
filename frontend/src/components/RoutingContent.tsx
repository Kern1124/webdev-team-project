import { Box } from "@chakra-ui/layout";
import { Route, Routes } from "react-router-dom";
import { SignupPage } from "../pages/SignupPage";
import { LoginPage } from "../pages/LoginPage";
import { PrivateRouting } from "./PrivateRouting";
import { NewspaperPage } from "../pages/NewspaperPage";
import { CopiesPage } from "../pages/CopiesPage";

export const RoutingContent = () => {
  return (
    <Box padding="2rem" marginTop="5rem">
      <Routes>
        <Route index path="/" />
        <Route path="/newspapers" element={<NewspaperPage />} />
        <Route path="/newspaper/:id" element={<CopiesPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/articles" />
        <Route path="/auth/*" element={<PrivateRouting />} />
      </Routes>
    </Box>
  );
};
