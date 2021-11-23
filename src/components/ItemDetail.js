import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCartContext } from "./CartContext";
import {
  Stack,
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const ItemDetail = ({ item }) => {
  const { addItem } = useCartContext();


  const onAdd = (count) => {
    addItem(item, count)  
  };

  return (
    <Flex
      w={{base:'100', md:"70%"}}
      m={6}
      rounded={"lg"}
      p={5}
      boxShadow={"2xl"}
      direction="column"
      align="center"
    >
      <Heading fontSize={"3xl"} fontFamily={"body"} fontWeight={500} my={5}>
        {item.title}
      </Heading>
      <Flex direction={{ base: "column", lg: "row" }} w="100%" justify='space-evenly'>
        <Box mr={8}  rounded={"lg"}
          pos={"relative"}
          margin='auto'
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${item.img})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}>
          <Image src={item.img} rounded={"lg"} width={400} />
        </Box>
        <Box rounded={"lg"} boxShadow={'lg'} p={6} maxW={500}> 
          <Stack justify="center">
            <Text fontSize={"xl"}>{item.description}</Text>
            <Text fontSize={"xl"}>Precio: ${item.price}</Text>
            <Text fontSize={"xl"} color="gray.500">
              Stock: {item.stock}
            </Text>
            <ItemCount item={item} onAdd={onAdd} />
            <Link to={`/cart`} style={{width: '100%'}}>
            <Button
              mt={12}
              w={"full"}
              bg={"gray.700"}
              color={"white"}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(45 55 72 / 43%)"}
              _hover={{
                bg: "gray.800",
              }}
              _focus={{
                bg: "gray.800",
              }}
            >
              Terminar compra
            </Button>
          </Link>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ItemDetail;
