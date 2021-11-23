import React from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      w="80%"
      mt={8}
      h="30rem"
      display="flex"
      boxShadow={"2xl"}
      flexDirection="column"
    >
      <Text fontSize='2xl' color="gray.500" casing='uppercase'>No tienes nada en tu carrito</Text>
      <Link to="/">
        <Button colorScheme="gray" my={3}>Volver a comprar</Button>
      </Link>
    </Box>
  );
};

export default CartEmpty;
