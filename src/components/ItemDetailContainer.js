import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import Loader from "./Loader/Loader";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "@firebase/firestore";
import { Center } from "@chakra-ui/layout";


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { id } = useParams();
  





  useEffect(() => {
    setIsLoading(true);
    const requestItem = async () => {
      const productQuery = doc(db, "products", id);
      const product = await getDoc(productQuery);
      const productData = product.data();
      setItem(productData);   
    }
    requestItem();
    setIsLoading(false);

  }, [id]);

  return (
    <Center>
      {isLoading ? (
        <Loader />
      ) : (
        <ItemDetail item={item} />
      )}
    </Center>
  );
};

export default ItemDetailContainer;
