import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import { useCallback, useState } from "react";
import { FiEdit2 } from "react-icons/fi";

import { CustomButton } from "./CustomButton";
import { CustomDropzone } from "./CustomDropzone";
import { useUploadImage } from "../hooks/useUploadImage";
import { useSuccessToast } from "../hooks/useSuccessToast";
import { useErrorToast } from "../hooks/useErrorToast";
import { AxiosError } from "axios";
import { ErrorResponseType } from "../types/response";

interface FileUpload {
  id: string;
}

export const FileUpload = ({id}: FileUpload) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {upload} = useUploadImage(id)
  const [imageFile, setImageFile] = useState<File | null>(null);
  const successToast = useSuccessToast()
  const toast = useErrorToast()

  const uploadHandler = useCallback((file: File | null) => {
    setImageFile(file);
  }, []);

  const closeHandler = useCallback(() => {
    setImageFile(null);
    onClose();
  }, [onClose]);

  const submitHandler = useCallback(async () => {
    if (imageFile == null) {
        return
    }
    try {
        await upload(imageFile);
        successToast("Succesfully uploaded image");
      } catch (e) {
        const data = (e as AxiosError)?.response?.data as ErrorResponseType;
        toast(data?.message);
      }
      closeHandler()
  }, [imageFile, toast, successToast, upload, closeHandler])

  return (
    <>
      <CustomButton onClickHandler={onOpen} borderRadius="1.5rem" width="1rem">
        <Icon ringColor="secondaryLight" as={FiEdit2} />
      </CustomButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload a file</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <CustomDropzone uploadHandler={uploadHandler} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeHandler}>Cancel</Button>
            <Button
              bgColor="main"
              color="light"
              ml="1rem"
              onClick={submitHandler}
              isDisabled={!imageFile}
            >
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
