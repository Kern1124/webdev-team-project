import "react-quill/dist/quill.snow.css";

import { Center } from "@chakra-ui/layout";
import { CustomEditor } from "../components/CustomEditor";

export const ArticleCreatePage = () => {
  return (
    <Center>
      <CustomEditor />
    </Center>
  );
};
