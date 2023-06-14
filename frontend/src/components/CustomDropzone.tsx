import { Box, Center, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface CustomDropzoneProps {
  uploadHandler: (file: File) => void;
  errorHandler: (message: string) => void;
}

export const CustomDropzone = ({
  uploadHandler,
  errorHandler,
}: CustomDropzoneProps) => {
  const [errorMessages, setErrorMessages] = useState<string>();
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 1,
      maxSize: 1024 * 1024 * 4,
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

  useEffect(() => {
    if (fileRejections.length > 0) {
      setErrorMessages(
        fileRejections[0].errors.reduce(
          (last, error) => last + "\n" + error.message,
          ""
        )
      );
    }
  }, [fileRejections, errorHandler]);

  const uploadedFilenames =
    acceptedFiles.length > 0 && "Uploaded file: " + acceptedFiles[0].name;

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
      <Text>
        {uploadedFilenames ||
          (errorMessages && "Errors: " + errorMessages)}
      </Text>
    </>
  );
};
