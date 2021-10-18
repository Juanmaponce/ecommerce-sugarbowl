import React from "react";
import { Button, Card } from "react-bootstrap";
// import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    console.log(item);
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.itemName}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button variant="success">Añadir al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
