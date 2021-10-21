import React, { useState, useEffect } from "react";
import { products } from "../data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { Spinner } from 'react-bootstrap'

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  let { id } = useParams();

  
  
  
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(data => setItem(data))
        setIsLoading(false)
    }, 2000);
  }, [id]);



  return (
    <div className="d-flex justify-content-center">
    {isLoading ? <Spinner animation="grow" variant="dark"/> : <ItemDetail item={item} />}
  </div>
  );
};

export default ItemDetailContainer;
