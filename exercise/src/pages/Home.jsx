import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import product from "../data/Product";
import { addToCart } from "../data/Cart";

function Home() {
  const toast = useToast();

  const handleAddToCart = (product) => {
    const item = {
      id: product.id + 1,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };

    addToCart(item);

    toast({
      title: "Berhasil!",
      description: `${product.name} berhasil ditambahkan ke keranjang`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <SimpleGrid mt={2} ml={2} mr={2} columns={[2, null, 5]} spacing="10px">
        {product.map((product) => (
          <Card key={product.id}>
            <CardBody bgColor={"whitesmoke"}>
              <Image
                src={product.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.name}</Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nam modi ipsam, optio eligendi iste officia quis
                  tempore enim atque nihil exercitationem quia temporibus
                  debitis nesciunt excepturi eveniet mollitia minus.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  Rp. {product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Home;
