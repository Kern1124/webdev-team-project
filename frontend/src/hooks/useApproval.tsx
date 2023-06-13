import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postApproval } from "../api/requests";

export const useApproval = () => {
    const queryClient = useQueryClient();
    
    const { mutateAsync: approval, isLoading, isError, data } = useMutation({
        mutationFn: postApproval,
        retry: false,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["copies"] });
        },
    })
    
    return { approval, isLoading, isError, data };
}
