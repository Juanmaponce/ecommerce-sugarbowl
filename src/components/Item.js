import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";

const Item = ({ item }) => {
  return (
    <Flex py={12} m={{base: 'auto'}} ml={{md: 10}}>
      <Box
        p={6}
        maxW="330px"
        w={"full"}
        bg="white"
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={"-12"}
          pos={"relative"}
          heigth={"230px"}
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
          }}
        >
          <Image
            rounded={"lg"}
            heigth={230}
            width={{base: 250,  md: 282}}
            objectFit={"cover"}
            src={item.img}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color="gray.500" fontSize={"sm"} textTransform={"uppercase"}>
            {item.category}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {item.title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={600} fontSize={"xl"}>
              ${item.price}
            </Text>
            <Text color={"gray.600"}>Stock: {item.stock}</Text>
          </Stack>
          <Link to={`item/${item.id}`} style={{width: '100%'}}>
            <Button
              mt={10}
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
              Ver detalles
            </Button>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Item;
