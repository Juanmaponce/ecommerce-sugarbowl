import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Item = ({ item }) => {
  return (
    <div className="col-md-2 m-5">
      <div className="card">
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body d-flex justify-content-center flex-column">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            <strong>Precio</strong> ${item.price}
          </p>
          <p className="card-text">Stock: {item.stock}</p>
          <Link to={`item/${item.id}`}>
            <Button variant="dark" style={{ width: "100%" }}>
              Ver Detalles
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
