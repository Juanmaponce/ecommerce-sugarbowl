import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../data";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
        const asyncMock = new Promise((resolve, reject) => {
            resolve(products)
        });
        asyncMock.then((response) => {setItems(response)})
    }, 2000);
  });

  return (
    <div className="d-flex justify-content-center">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
