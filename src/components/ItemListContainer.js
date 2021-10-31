import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader/Loader";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../firebase/firebase";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let { categoryid } = useParams()


  const dbProducts = collection(db, 'products');
  
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

  useEffect(() => {
    setIsLoading(true);
    requestData();
    setIsLoading(false);

  }, [categoryid]);

  return (
    <div className="d-flex justify-content-center">
      {isLoading ? (
        
        <Loader />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
