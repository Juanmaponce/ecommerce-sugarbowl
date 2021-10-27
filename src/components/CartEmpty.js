import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h3 className="fs-2">Tu carrito de compras esta vacio</h3>
      </div>
      <div className="d-flex justify-content-center my-5">
        <Link to="/">
          <Button variant="dark">Volver a comprar</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
