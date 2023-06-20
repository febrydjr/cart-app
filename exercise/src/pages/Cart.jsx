import { Box, Button, Text, extendTheme } from "@chakra-ui/react";
import cart from "../data/Cart";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
function Cart() {
  return (
    <Box
      display="flex"
      m={"auto"}
      mt={10}
      w={"600px"}
      boxShadow="dark-lg"
      p="6"
      rounded="md"
      bg="white"
    >
      <Box>
        <Text as={"h1"} fontSize={"xl"}>
          Cart
        </Text>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((item) => (
              <Tr key={item.id}>
                <Td>{item.name}</Td>
                <Td>{item.price}</Td>
                <Td>{item.quantity}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}

export default Cart;
