import { Box, Center, Text } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";

interface CustomDropzoneProps {
  uploadHandler: (file: File) => void;
}

export const CustomDropzone = ({ uploadHandler }: CustomDropzoneProps) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      uploadHandler(acceptedFiles[0]);
    }
  }, [acceptedFiles, uploadHandler]);

  return (
    <>
      <Box
        bgColor="gray.100"
        borderColor="main"
        borderStyle="dashed"
        borderWidth="0.15rem"
        p="0.3rem"
        {...getRootProps()}
        w="100%"
        height="10rem"
      >
        <input {...getInputProps()} />
        <Center mt="3.5rem">
          <Text>Drop the file here ...</Text>
        </Center>
      </Box>
      <Text>{acceptedFiles.length > 0 && "Uploaded file: " + acceptedFiles[0].name}</Text>
    </>
  );
};
