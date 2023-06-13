import { SearchIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import { ChangeEvent, useCallback, useState } from "react";

import { LinkWrapper } from "./LinkWrapper";

interface SeachLinkProps {
  to: string;
  placeholder: string;
}

export const SearchLink = ({ to, placeholder }: SeachLinkProps) => {
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();

  const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }, []);

  const clickHandler = useCallback(() => {
    if (content) {
      navigate(to + "/" + content);
      setContent("");
    }
  }, [to, content, navigate]);

  return (
    <Flex>
      <Input
        focusBorderColor="secondary"
        borderColor="secondaryLight"
        placeholder={placeholder}
        h="2.5rem"
        marginRight="0.3rem"
        value={content}
        maxLength={30}
        onChange={inputChangeHandler}
      />
      <LinkWrapper onClick={clickHandler}>
        <SearchIcon />
      </LinkWrapper>
    </Flex>
  );
};
