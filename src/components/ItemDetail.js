import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import {  useCartContext } from '../../CartContext';

const ItemDetail = ({ item }) => {
  const { addToCart } = useCartContext()

  const [count, setCount] = useState(null);
 


  const onAdd = (count) => {
    count > 0 ? 
   setCount((addToCart(item, count)), count) : alert("Agregar producto")
  };

  return (
    <div className="d-flex align-items-center justify-content-center mb-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <ItemCount item={item} onAdd={onAdd} />
        </Card.Body>
        <Link to="/cart">
          <Button variant="primary">Terminar Compra</Button>
        </Link>
      </Card>
    </div>
  );
};

export default ItemDetail;
