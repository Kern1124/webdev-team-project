import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import { LogoutPage } from "../pages/LogoutPage";
import { ArticleCreatePage } from "../pages/ArticleCreatePage";

export const PrivateRouting = () => {
    const { auth, isLoading, isError } = useAuth();

    if (isLoading) return null;
    if (!auth || auth.items.length === 0 || isError) return <Navigate to="/login" />;
    return (<Routes> 
        <Route path="article/create" element={<ArticleCreatePage />} />
        <Route path="logout" element={<LogoutPage />} />
        <Route path="article/submit" />
        <Route path="newspaper/submit" />
    </Routes>)

}