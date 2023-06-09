import "react-quill/dist/quill.snow.css";

import { Center, Flex } from "@chakra-ui/layout";
import { CustomEditor } from "../components/CustomEditor";
import { useCallback } from "react";
import { CustomSelect } from "../components/CustomSelect";
import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { CustomButton } from "../components/CustomButton";

export const ArticleCreatePage = () => {


  return (
    <Flex flexDir={{ base: "column", md: "row" }} mt="2rem" gap="2rem">
      <Flex w={{ base: "100%", md: "20%" }} flexDir="column" gap="1rem" >
        <CustomSelect placeholder="Select a newspaper">
          {[<option>pero</option>]}
        </CustomSelect>
        <CheckboxGroup>
          <Checkbox value="naruto">Naruto</Checkbox>
          <Checkbox value="sasuke">Sasuke</Checkbox>
          <Checkbox value="kakashi">Kakashi</Checkbox>
        </CheckboxGroup>
      </Flex>
      <Flex
        w={{ base: "1000", md: "100%" }}
        flexDir="column"
        alignItems="center"
        gap="1rem"
      >
      <CustomEditor />
      <CustomButton>
          Submit article
      </CustomButton>
      </Flex>
    </Flex>
  );
};
