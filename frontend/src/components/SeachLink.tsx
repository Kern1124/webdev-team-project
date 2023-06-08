import { Flex } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { RouteLink } from "./RouteLink";
import { SearchIcon } from "@chakra-ui/icons";

interface SeachLinkProps {
  to: string;
  placeholder: string;
}

export const SearchLink = ({ to, placeholder }: SeachLinkProps) => {
  return (
    <Flex>
      <Input
        focusBorderColor="secondary"
        borderColor="secondaryLight"
        placeholder={placeholder}
        h="2.5rem"
        marginRight="0.3rem"
      />
      <RouteLink to={to}>
        <SearchIcon />
      </RouteLink>
    </Flex>
  );
};
