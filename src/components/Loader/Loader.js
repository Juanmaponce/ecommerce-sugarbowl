import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex align="center" justify="space-between" mt="15rem">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="white"
        color="blue.400"
        size="xl"
      />
    </Flex>
  );
};

export default Loader;
