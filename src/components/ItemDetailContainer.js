import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import Loader from "./Loader/Loader";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "@firebase/firestore";


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { id } = useParams();
  



  const requestItem = async () => {
    const productQuery = doc(db, "products", id);
    const product = await getDoc(productQuery);
    const productData = product.data();
    setItem(productData);   
  }

  useEffect(() => {
    setIsLoading(true);
    requestItem();
    setIsLoading(false);

  }, [id]);

  return (
    <div className="d-flex justify-content-center">
      {isLoading ? (
        <Loader />
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
