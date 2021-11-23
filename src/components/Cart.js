import React from "react";
import { useCartContext } from "./CartContext";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import CartItem from "./CartItem";
import CartEmpty from "./CartEmpty";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const { cart, clear, totalPrice } = useCartContext();

  const history = useHistory();

  const handleRoute = () => {
    history.push("/checkout");
  };

  const price = totalPrice();

  return (
    <Box display="flex" justifyContent="center">
      {cart.length !== 0 ? (
        <Box
          alignItems="center"
          w="80%"
          display="flex"
          boxShadow={"2xl"}
          flexDirection="column"
        >
          {cart.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })}
          <Box>
            <HStack p={5}>
              <Text fontSize={"2xl"} fontWeight={500} px={5}>Total: ${price}</Text>
              <Box>
                <Button mx={5} colorScheme="red" onClick={() => clear()}>
                  Eliminar Productos
                </Button>
                <Button colorScheme="green" onClick={handleRoute}>
                  Pagar
                </Button>
              </Box>
            </HStack>
          </Box>
        </Box>
      ) : (
        <CartEmpty />
      )}
    </Box>
  );
};

export default Cart;
