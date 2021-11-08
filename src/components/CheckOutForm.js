import React from "react";
import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useCartContext } from "./CartContext";
import { Formik, Field, Form } from "formik";
import {  collection, Timestamp, addDoc, doc} from "firebase/firestore";
import { db } from "../firebase/firebase";

const CheckOutForm = () => {
  const { cart, totalPrice } = useCartContext();
  const orders = collection(db ,'orders')
  const price = totalPrice();

  return (
    <Flex justify="center" align="center">
      <Flex
        w="80%"
        boxShadow={"2xl"}
        backgroundColor="white"
        my="4rem"
        rounded={"xl"}
        align="center"
        direction="column"
      >
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
          }}
          onSubmit={async (values) => {
            const newOrder = {
              buyer : values,
              items: cart,
              price: price,
              date: Timestamp.now()
            }
            const orderRef = await addDoc((orders), newOrder)
            console.log(orderRef.id)
          }}
        >
          <Form>
            <Field name="name">
              {({ field }) => (
                <FormControl>
                  <FormLabel htmlFor="name">Nombre</FormLabel>
                  <Input {...field} id="name" />
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field }) => (
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...field} id="email" />
                </FormControl>
              )}
            </Field>
            <Field name="phone">
              {({ field }) => (
                <FormControl>
                  <FormLabel htmlFor="phone">Telefono</FormLabel>
                  <Input {...field} id="phone" />
                </FormControl>
              )}
            </Field>
            <Button
              type="submit"
              mb="2rem"
              w={"50%"}
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
              Comprar
            </Button>
          </Form>
        </Formik>
      </Flex>
    </Flex>
  );
};

export default CheckOutForm;
