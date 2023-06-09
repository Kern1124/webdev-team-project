import "react-quill/dist/quill.snow.css";

import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { Card } from "@chakra-ui/card";

// react-quill is a bit broken, if this is put directly into the component children
// the editor area keeps dissapearing
const customEditArea = <Card h="60vh" overflow="scroll" bgColor="light" border="none"  />

export const CustomEditor = () => {
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

  const inputChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value),
    []
  );

  return (
    <>
      <Box h="20vh" w={{ base: "100%", md: "70%" }}>
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Input image URL</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>URL</FormLabel>
              <Input placeholder="url" onChange={inputChangeHandler} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bgColor="main" color="light" mr={3} onClick={imageHandler}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
