import { BoxProps } from "@chakra-ui/react"
import { ReactNode, ReactElement } from "react"
import { useAuth } from "../hooks/useAuth";

interface AuthorizedProps {
    role: ("MANAGER" | "DIRECTOR" | "JOURNALIST" | "GUEST"),
    children: ReactElement<BoxProps> | ReactElement<BoxProps>[] | undefined | ReactNode
}


export const Authorized = ({ children, role }: AuthorizedProps) => {
    const { auth } = useAuth();

    if (!auth) {
        if (role === "GUEST") {
            return <>{children}</>
        }
        return null;
    }


    if (!auth.item.userRoles.includes(role)) {
        return null;
    }
    return <>{children}</>
}