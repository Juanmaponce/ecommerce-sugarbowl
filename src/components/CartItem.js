import React from "react";
import { Box, HStack, Image, Text, Button } from "@chakra-ui/react";
import { useCartContext } from './CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



const CartItem = ({ item }) => {
    const { removeItem } = useCartContext()

  

  return (
    <HStack p={5} w="70%" display="flex" justify="space-around" borderBottom="1px solid gray"> 
      <Box>
        <Image src={item.img} width='100px'/>
      </Box>
      <Box>
        <Text fontSize={"2xl"} fontFamily={"body"} fontWeight={500} >{item.title}</Text>
        <Text>{item.description}</Text>
        <Text color={"gray.600"}>Cantidad: {item.quantity}</Text>
      </Box>
      <Box>
        <Text fontSize={"2xl"} fontFamily={"body"} fontWeight={500}  >${item.price}</Text>
      </Box>
      <Box>
        <Button colorScheme="red" onClick={() => removeItem(item.id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
      </Box>
    </HStack>
  );
};

export default CartItem;
