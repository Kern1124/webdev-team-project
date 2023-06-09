import "react-quill/dist/quill.snow.css";

import { Center, Box } from "@chakra-ui/layout";
import { CustomEditor } from "../components/CustomEditor";
import { useCallback } from "react";
import { Select } from "@chakra-ui/select";

export const ArticleCreatePage = () => {
  const articleSubmitHandler = useCallback((content: string) => {
    console.log(content)
  }, [])

  return (
    <>
      <Box w={{ base: "100%" ,md:"35%"}} mt="0.5rem">
        <Select></Select>
      </Box>
      <Center mt="1.5rem">
        <CustomEditor onClickHandler={articleSubmitHandler} />
        
      </Center>
    </>
  );
};
