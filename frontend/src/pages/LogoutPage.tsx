import { useEffect } from "react";
import useLogout from "../hooks/useLogout"

export const LogoutPage = () => {
    const { logout } = useLogout({ redirect: '/login' })

    useEffect(() => {
        logout();
    }, [logout])

    return <></>;
}