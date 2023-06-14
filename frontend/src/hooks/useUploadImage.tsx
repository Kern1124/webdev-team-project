import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postNewspaperImage } from "../api/requests";


export const useUploadImage = (id: string) => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: upload,
    isLoading,
    isError,
    data,
  } = useMutation({
    mutationFn: (imageFile: File) => postNewspaperImage(id, imageFile),
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["newspaper"] });
    },
  });

  return { upload, isLoading, isError, data };
};
