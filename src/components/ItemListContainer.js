import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../data";
import { Spinner } from 'react-bootstrap'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data => setItems(data))
        setIsLoading(false)
    }, 2000);
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {isLoading ? <Spinner animation="grow" variant="dark"/> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
