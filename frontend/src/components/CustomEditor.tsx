import "../assets/styles.css";
import "react-quill/dist/quill.snow.css";

import { Card } from "@chakra-ui/card";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex } from "@chakra-ui/layout";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import ReactQuill from "react-quill";

import { CustomButton } from "./CustomButton";
import { InputModal } from "./InputModal";

// react-quill is a bit broken, if this is put directly into the component children
// the editor area keeps dissapearing
const customEditArea = (
  <Card h="60vh" overflow="scroll" bgColor="light" borderRadius="0" />
);

interface CustomEditorProps {
  onClickHandler: (value: string) => void;
}

export const CustomEditor = ({ onClickHandler }: CustomEditorProps) => {
  const [value, setValue] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const reactQuillRef: any = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const imageHandler = useCallback(() => {
    if (imageUrl) {
      onClose();
      const quill = reactQuillRef?.current?.getEditor();
      quill.focus();
      const range = quill.getSelection();
      quill.insertEmbed(range.index, "image", imageUrl);
      quill.setSelection(range.index + 1);
      setImageUrl("");
    }
  }, [imageUrl, onClose]);

  const onCloseHandle = useCallback(() => {
    setImageUrl("");
    onClose();
    const quill = reactQuillRef?.current?.getEditor();
    quill.focus();
  }, [onClose]);

  const inputChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value),
    []
  );

  const buttonClickHandler = useCallback(() => {
    onClickHandler(value);
  }, [value, onClickHandler]);

  return (
    <>
      <Flex
        w={{ base: "1000", md: "70%" }}
        flexDir="column"
        alignItems="center"
        gap="1rem"
      >
        <Box w="100%">
          <ReactQuill
            value={value}
            onChange={setValue}
            modules={{
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
                  image: onOpen,
                },
              },
            }}
            placeholder="Input article content..."
            ref={reactQuillRef}
          >
            {customEditArea}
          </ReactQuill>
        </Box>
        <CustomButton onClickHandler={buttonClickHandler}>
          Submit article
        </CustomButton>
      </Flex>

      <InputModal
        title="Input image URL"
        isOpen={isOpen}
        onClose={onClose}
        onCloseHandler={onCloseHandle}
        onClickHandler={imageHandler}
        inputChangeHandler={inputChangeHandler}
      />
    </>
  );
};
