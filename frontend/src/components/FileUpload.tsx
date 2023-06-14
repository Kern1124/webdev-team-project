import { Button } from '@chakra-ui/button';
import { Icon } from '@chakra-ui/icon';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { useDisclosure } from '@chakra-ui/react-use-disclosure';
import { useCallback, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';

import { CustomButton } from './CustomButton';
import { CustomDropzone } from './CustomDropzone';

interface FileUpload {
  id: string;
}

export const FileUpload = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [imageFile, setImageFile] = useState<File | null>(null)

    const uploadHandler = useCallback((file: File) => {
        setImageFile(file)
    }, [])

    console.log(imageFile)
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
            <Button onClick={onClose}>Cancel</Button>
            <Button
              bgColor="main"
              color="light"
              ml="1rem"
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
