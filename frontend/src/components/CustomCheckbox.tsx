import { Checkbox } from "@chakra-ui/checkbox";

interface CustomCheckbox {
  value: string;
  children: string;
}

export const CustomCheckbox = ({ value, children }: CustomCheckbox) => {
  return (
    <Checkbox colorScheme="gray" value={value}>
      {children}
    </Checkbox>
  );
};
