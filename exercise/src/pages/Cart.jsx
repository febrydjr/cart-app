import {
  Box,
  Button,
  FormLabel,
  Input,
  Text,
  extendTheme,
} from "@chakra-ui/react";
import cart from "../data/Cart";
import { SimpleGrid } from "@chakra-ui/react";
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
import product from "../data/Product";
function Cart() {
  return (
    <Box>
      <Text fontSize={"4xl"} mt={4} mb={4} align={"center"}>
        CART
      </Text>
      <SimpleGrid
        color={"white"}
        m={"auto"}
        width={"900px"}
        // h={"500px"}
        columns={2}
        spacing={2}
      >
        <Box bg="lightblue">
          <Table color={"black"}>
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((product) => (
                <Tr key={product.id}>
                  <Td>{product.name}</Td>
                  <Td>{product.price}</Td>
                  <Td>{product.quantity}</Td>
                  <Td>{product.price * product.quantity}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box bg="lightcoral">
          <Text color={"white"} ml={4} mt={4} fontSize={"2xl"}>
            Grand Total:
          </Text>
          <Text ml={4} mr={4} fontSize={"4xl"} fontFamily={"monospace"}>
            {cart.reduce((a, b) => a + b.price * b.quantity, 0)}
          </Text>
          <Button colorScheme="green" mb={4} ml={4} mt={10}>
            Checkout!
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Cart;
