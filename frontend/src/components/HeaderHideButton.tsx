import { Box } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useCallback } from "react";

interface HeaderHideButtonProps {
  isHidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderHideButton = ({
  isHidden,
  setHidden,
}: HeaderHideButtonProps) => {
  const toggleHidden = useCallback(() => {
    setHidden((prev) => !prev);
  }, [setHidden]);

  return (
    <Box
      paddingLeft="0.5rem"
      bgColor="main"
      display={{ base: "block", md: "none" }}
      onClick={toggleHidden}
    >
      {isHidden ? (
        <HamburgerIcon _hover={{color: "secondary"}} margin="1rem" boxSize="2rem" color="secondaryLight" />
      ) : (
        <CloseIcon _hover={{color: "secondary"}} margin="1.25rem" boxSize="1.5rem" color="secondaryLight" />
      )}
    </Box>
  );
};
