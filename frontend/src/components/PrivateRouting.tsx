import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import { LogoutPage } from "../pages/LogoutPage";
import { ArticleCreatePage } from "../pages/ArticleCreatePage";

export const PrivateRouting = () => {
    const { auth, isLoading, isError } = useAuth();

    // TODO: add loading page
    if (isLoading) return null;
    if (!auth || isError) return <Navigate to="/login" />;
    // TODO: routes need to be role protected
    return (<Routes> 
        <Route path="article/create" element={<ArticleCreatePage />} />
        <Route path="logout" element={<LogoutPage />} />
        <Route path="article/submit" />
        <Route path="newspaper/submit" />
    </Routes>)

}