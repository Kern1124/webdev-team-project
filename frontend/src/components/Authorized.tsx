import { BoxProps } from "@chakra-ui/react"
import { ReactNode, ReactElement } from "react"
import { useAuth } from "../hooks/useAuth";

interface AuthorizedProps {
    role: ("MANAGER" | "DIRECTOR" | "JOURNALIST" | "GUEST"),
    children: ReactElement<BoxProps> | ReactElement<BoxProps>[] | undefined | ReactNode,
    condition?: boolean
}


export const Authorized = ({ children, role, condition }: AuthorizedProps) => {
    const { auth } = useAuth();

    if ((condition != null && !condition) || !auth) {
        return null
    }

    if ((auth.items.length === 0 && role === "GUEST") || auth.items.includes(role)) {
        return <>{children}</>
    }

    return null;   
}