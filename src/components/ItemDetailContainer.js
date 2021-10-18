import React, { useState, useEffect } from "react";
import { products } from "../data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  let { id } = useParams();

  console.log(id);


  useEffect(() => {
    const asyncMock = new Promise((resolve, reject) => {
      resolve(products);
    });
    asyncMock.then((response) => {
      setItem(response.filter((item) => item.id.toString() === id));
    });
  },[id]);
  console.log(item);



  return (
    <div>
      <ItemDetail item={item[0]} />
    </div>
  );
};

export default ItemDetailContainer;
