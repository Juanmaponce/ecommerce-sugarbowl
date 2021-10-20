import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  console.log(item);
  const [count, setCount] = useState(null);

  const onAdd = (count) => {
    alert(`Agregar producto, cantidad ${count}`);

    setCount(count);
  };

  return (
    <div className="d-flex align-items-center justify-content-center mb-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.itemName}</Card.Title>
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
