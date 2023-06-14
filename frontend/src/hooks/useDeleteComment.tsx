import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCommentById } from "../api/requests";

export const useDeleteComment = (id: string) => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: deleteComment,
    isLoading,
    isError,
    data,
  } = useMutation({
    mutationFn: () => deleteCommentById(id),
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment"] });
    },
  });

  return { deleteComment, isLoading, isError, data };
};
