import { Flex, Box } from "@chakra-ui/layout";
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
        placeholder={placeholder}
        h="2.5rem"
        w="8.8rem"
        marginRight="0.3rem"
      />
      <RouteLink to={to}>
        <SearchIcon />
      </RouteLink>
    </Flex>
  );
};
