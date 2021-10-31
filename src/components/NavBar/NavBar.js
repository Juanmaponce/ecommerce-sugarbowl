import CartWidget from "../CartWidget";
import "./NavBar.css";
import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="blue.400"
      color="white"
      borderBottomRightRadius={10}
      borderBottomLeftRadius={10}
    >
      <Flex align="center" mr={5}>
        <Link className="link" to="/">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            SugarBowl
          </Heading>
        </Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Link className="link" to="/">
          <Text>Inicio</Text>
        </Link>
        <Link  to="/category/pasteleria">
          <Text>Pasteleria</Text>
        </Link>
        <Link  to="/category/panaderia">
          <Text>Panaderia</Text>
        </Link>
      </Stack>

      <Box
        display={{ base: isOpen ? "flex" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
        justifyContent="center"
      >
        <CartWidget />
      </Box>
    </Flex>
  );
};

export default NavBar;