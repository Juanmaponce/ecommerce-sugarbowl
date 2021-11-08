import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Flex } from "@chakra-ui/react";
import Loader from "./Loader/Loader";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../firebase/firebase";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let { categoryid } = useParams()


  const dbProducts = collection(db, 'products');
  
  
  useEffect(() => {
    setIsLoading(true);
    const requestData = async () => {
      const docs= []
      if(categoryid){
        const categoryQuery = query(dbProducts, where("category", "==", categoryid))
        const categoryData = await getDocs(categoryQuery)
        categoryData.forEach((document) => {
          docs.push({...document.data(), id: document.id})
        })
        setItems(docs)
      }else{
        const data = await getDocs(dbProducts);
        data.forEach((document) => {
          docs.push({...document.data(), id: document.id})
          console.log(docs)
        });
        console.log(items)
        setItems(docs)
      }
    }
    requestData();
    setIsLoading(false);

  }, [categoryid, dbProducts, items]);

  return (
    <Flex justify={'center'} align={'center'} wrap="nowrap" m="auto">
      {isLoading ? (
        
        <Loader />
      ) : (
        <ItemList items={items} />
      )}
    </Flex>
  );
};

export default ItemListContainer;
