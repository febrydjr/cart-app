import {
  Box,
  Flex,
  Avatar,
  HStack,
  // Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HiShoppingCart } from "react-icons/hi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import cart from "../data/Cart";
import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";

const Links = ["Dashboard", "Projects", "Team"];
function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
}
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("blue.200", "blue.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sum, setSum] = useState(0);

  return (
    <>
      <Box bg={useColorModeValue("blue.100", "blue.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {/* -------------- */}
            <Link onClick={onOpen} mr={4}>
              {/* <Button variant={"ghost"} onClick={onOpen}> */}
              <HiShoppingCart size={24} />

              {/* </Button> */}

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader mr={5}>Cart</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
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
                    <Text mt={4}>
                      <Text>Total: &nbsp;</Text>
                      <Text>
                        Rp. {cart.reduce((a, b) => a + b.price * b.quantity, 0)}
                      </Text>
                    </Text>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Link to="/cart">
                      <Button variant="ghost">Goto Cart</Button>
                    </Link>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Link>
            {/* ---------------- */}
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  ml={6}
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              {/* <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
