import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"


export const PrivateRouting = () => {
    const { auth, isLoading, isError } = useAuth();

    // TODO: add loading page
    if (isLoading) return null;
    if (!auth || isError) return <Navigate to="/login" />;

    // TODO: routes need to be role protected
    return (<Routes> 
        <Route path="articles/create" />
        <Route path="articles/submit" />
        <Route path="newspaper/submit" />
    </Routes>)

}