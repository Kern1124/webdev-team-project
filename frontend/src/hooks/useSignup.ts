import { useMutation } from "@tanstack/react-query";
import { userSignup } from "../api/requests";
import { useNavigate } from "react-router-dom";
import { UserSignupFormType } from "../types/user";

type UseLoginProps = {
    redirect: string;
}

export const useSignup = ({ redirect }: UseLoginProps) => {
    const navigate = useNavigate();
    
    const { mutateAsync: signup, isLoading, isError, data } = useMutation({
        mutationFn: (data: UserSignupFormType) => userSignup(data),
        retry: false,
        onSuccess: () => {
            navigate(redirect);
        },
    })
    
    return { signup, isLoading, isError, data };
}
