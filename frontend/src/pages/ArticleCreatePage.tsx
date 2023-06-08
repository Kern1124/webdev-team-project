import { Box, Center } from "@chakra-ui/layout";
import { useState, useRef, useMemo, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";



export const ArticleCreatePage = () => {
  const [value, setValue] = useState("");
  const reactQuillRef: any = useRef(null);

  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter image URL');
    const url = prompt('Enter the image URL:');
    if (url) { 
        const quill = reactQuillRef?.current?.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range, "image", url);
    }
  }, []);
  
  const modules = useMemo( () => { return {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  } }, [imageHandler]);


  return (
    <Center>
      <Box h="80vh" w={{ base: "100%", md: "70%" }}>
        <ReactQuill
          value={value}
          onChange={setValue}
          modules={modules}
          placeholder="Input article content..."
          ref={reactQuillRef}
        />
      </Box>
    </Center>
  );
};
