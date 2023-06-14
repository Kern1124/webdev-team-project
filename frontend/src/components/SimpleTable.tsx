import { BoxProps } from "@chakra-ui/layout";
import { Table, TableContainer, Tbody } from "@chakra-ui/table";
import { ReactElement } from "react";

interface SimpleTableProps {
  children: ReactElement<BoxProps> | ReactElement<BoxProps>[];
}

export const SimpleTable = ({ children }: SimpleTableProps) => {
  return (
    <TableContainer
      mt="0.5rem"
      bgColor="white"
      borderRadius="0.3rem"
      width={{ base: "100%", md: "50%" }}
    >
      <Table>
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
};
