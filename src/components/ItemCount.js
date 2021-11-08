import React, { useState } from "react";
import { Button, ButtonGroup, Stack, Text, Box } from "@chakra-ui/react";

const ItemCount = ({ item, onAdd }) => {
  const [count, setCount] = useState(1);

  const stock = item.stock;

  const handleCountUp = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleCountDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Stack justify='space-evenly'>
      <Box>
        <Text fontSize={"xl"}>Cantidad:</Text>
      </Box>

      <ButtonGroup alignItems="center" justifyContent="center">
        <Button onClick={handleCountDown} w="20%" textAlign="center">
          -
        </Button>
        <Text w="20%" textAlign="center">
          {count}
        </Text>
        <Button onClick={handleCountUp} w="20%" textAlign="center">
          +
        </Button>
      </ButtonGroup>

      <Box>
        <Button
          w={"full"}
          bg={"gray.400"}
          color={"white"}
          rounded={"xl"}
          boxShadow={"0 5px 20px 0px rgb(160 174 192 / 43%)"}
          _hover={{
            bg: "gray.500",
          }}
          _focus={{
            bg: "gray.500",
          }}
          onClick={() => onAdd(count)}
        >
          Añadir al carrito
        </Button>
      </Box>
    </Stack>
  );
};

export default ItemCount;
