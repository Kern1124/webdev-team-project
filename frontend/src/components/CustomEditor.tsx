import '../assets/styles.css';
import 'react-quill/dist/quill.snow.css';

import { Card } from '@chakra-ui/card';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box } from '@chakra-ui/layout';
import { ChangeEvent, useCallback, useRef, useState } from 'react';
import ReactQuill from 'react-quill';

import { InputModal } from './InputModal';

// react-quill is a bit broken, if this is put directly into the component children
// the editor area keeps dissapearing
const customEditArea = (
  <Card h="55vh" overflow="auto" bgColor="light" borderRadius="0" />
);

interface CustomEditorProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const CustomEditor = ({
  placeholder,
  value,
  onChange,
}: CustomEditorProps) => {
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

  return (
    <>
      <Box w="100%">
        <ReactQuill
          value={value}
          onChange={onChange}
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
          placeholder={placeholder}
          ref={reactQuillRef}
        >
          {customEditArea}
        </ReactQuill>
      </Box>

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
