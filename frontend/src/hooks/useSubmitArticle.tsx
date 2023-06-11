import { useQueryClient } from "@tanstack/react-query";
import { ArticleFormType } from "../types/article";
import { submitArticle } from "../api/requests";
import { useMutation } from "@tanstack/react-query";


export const useSubmitArticle = () => {
    const queryClient = useQueryClient();
    
    const { mutateAsync: submit, isLoading, isError, data } = useMutation({
        mutationFn: (data: ArticleFormType) => submitArticle(data),
        retry: false,
        onSuccess: () => {
            queryClient.invalidateQueries(['article']);
        },
    })
    
    return { submit, isLoading, isError, data };
}