import { Spinner } from "@chakra-ui/spinner";
import { CustomButton } from "./CustomButton";

interface UserFormButtonProps {
  children: string;
  isDisabled: boolean;
}

export const UserFormButton = ({ children, isDisabled }: UserFormButtonProps) => {
  const label = isDisabled ? <Spinner /> : children

  return (
    <CustomButton isDisabled={isDisabled}>
      {label}
    </CustomButton>
  );
};
