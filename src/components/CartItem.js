import React from "react";
import { Card, Button } from "react-bootstrap";
import { useCartContext } from './CartContext'



const CartItem = ({ item }) => {
    const { removeItem } = useCartContext()

  

  return (
    <div className="d-flex justify-content-center my-5">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>Cantidad: {item.quantity} Precio{item.price * item.quantity}</Card.Text>
          <div className="d-flex justify-content-center">
            <Button variant='danger' onClick={() => removeItem(item.id)}>delete</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartItem;
