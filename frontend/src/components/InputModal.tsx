import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { ChangeEventHandler } from 'react';

interface InputModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    onClickHandler: () => void;
    onCloseHandler: () => void;
    inputChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

export const InputModal = ({isOpen, onClose, inputChangeHandler, onClickHandler, onCloseHandler, title}: InputModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <Input onChange={inputChangeHandler} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button bgColor="main" color="light" mr={3} onClick={onClickHandler}>
            Add
          </Button>
          <Button onClick={onCloseHandler}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
