import { BoxProps } from "@chakra-ui/react"
import { ReactNode, ReactElement } from "react"
import { useAuth } from "../hooks/useAuth";

interface AuthorizedProps {
    role: ("MANAGER" | "DIRECTOR" | "JOURNALIST"),
    children: ReactElement<BoxProps> | ReactElement<BoxProps>[] | undefined | ReactNode
}


export const Authorized = ({ children, role }: AuthorizedProps) => {
    const { auth } = useAuth();

    if (!auth || auth.item.role !== role) {
        return null;
    }
    return <>{children}</>
}