import React, {useState} from "react";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Heading
} from "@chakra-ui/react";
import { useCartContext } from "./CartContext";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Link } from "react-router-dom";

const CheckOutForm = () => {
  const [orderId, setOrderId] = useState('')
  const { cart, totalPrice, clear } = useCartContext();
  const orders = collection(db, "orders");
  const price = totalPrice();
  console.log(orderId)



  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Muy corto!")
      .max(50, "Muy largo!")
      .required("Requerido"),
    email: Yup.string().email("Email invalido").required("Requerido"),
    phone: Yup.number()
      .typeError("No parece un numero de telefono")
      .positive("Tiene que ser un numero positivo")
      .integer("Debe ser un numero entero")
      .min(8)
      .required("Requerido"),
  });
  

  return (
    <Flex justify="center" align="center">
    {orderId !== "" ? (
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
          <Text fontSize='2xl'  casing='uppercase'>Gracias por su compra</Text>
          <Text fontSize='2xl'  casing='uppercase'>su id de nro de compra es {orderId}</Text>
          <Link to="/">
            <Button colorScheme="gray" my={3}>Volver a comprar</Button>
          </Link>
        </Box>
    ):(
      <Flex
        w="80%"
        boxShadow={"2xl"}
        backgroundColor="white"
        my="4rem"
        rounded={"xl"}
        align="center"
        direction="column"
      >
        <Heading>CheckOut</Heading>
        <Box w="full" justify="center" py={5}>
          {cart.map((item) => {
            return (
              <Flex justify="center" key={item.id}>
                <Text mx={1}>{item.title}:</Text>
                <Text>
                  ${item.price * item.quantity}
                </Text>
              </Flex>
            );
          })}
        </Box>
        <Text>Precio total: ${price}</Text>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
          }}
          onSubmit={async (values) => {
            const newOrder = {
              buyer: values,
              items: cart,
              price: price,
              date: Timestamp.now(),
            };
            const orderRef = await addDoc(orders, newOrder);
            console.log('ducument writen with id' + orderRef.id)
            clear();
            setOrderId(orderRef.id)
          }}
          validationSchema={FormSchema}
        >
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Nombre</FormLabel>
                  <Input {...field} id="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...field} id="email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="phone">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.phone && form.touched.phone}
                >
                  <FormLabel htmlFor="phone">Telefono</FormLabel>
                  <Input {...field} id="phone" />
                  <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
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
    )}
    </Flex>
  );
};

export default CheckOutForm;
