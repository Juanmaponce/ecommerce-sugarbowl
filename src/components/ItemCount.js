import React, { useState } from "react";
import { Button } from 'react-bootstrap'

const ItemCount = ({item, onAdd}) => {
  const [count, setCount] = useState(1);

  const stock = item.stock;

  const handleCountUp = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleCountDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div
        className="input-group mb-3 text-center d-flex justify-content-center"
        style={{ with: "100%" }}
      >
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={handleCountDown}
        >
          -
        </button>
        <span className="input-group-text px-5">{count}</span>
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={handleCountUp}
        >
          +
        </button>
      </div>
      <Button variant="success" onClick={() => onAdd(count)}>Añadir al carrito</Button>
    </>
  );
};

export default ItemCount;
