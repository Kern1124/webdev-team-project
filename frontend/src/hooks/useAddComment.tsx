import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postComment } from "../api/requests";
import { CommentSubmitType } from "../types/comment";


export const useAddComment = () => {
    const queryClient = useQueryClient();
    
    const { mutateAsync: submit, isLoading, isError, data } = useMutation({
        mutationFn: (data: CommentSubmitType) => postComment(data),
        retry: false,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["comment"] });
        },
    })
    
    return { submit, isLoading, isError, data };
}
