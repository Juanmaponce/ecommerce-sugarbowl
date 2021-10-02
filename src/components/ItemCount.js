import React, { useState } from "react";

const ItemCount = (props) => {
    const [count, setCount] = useState(1);

    const stock = props.stock;

    const handleCountUp = () =>{
        if(count === stock){
            return
        }
        setCount(count + 1);
    }
    const handleCountDown = () =>{
        if(count > 1){
            setCount(count - 1);
        }
    }


  return (
    <div className="card">
      <div className="card-body d-flex justify-content-center flex-column">
        <h5 className="card-title">{props.itemName}</h5>
        <p className="card-text">Stock: {stock}</p>
        <div className="input-group mb-3 text-center" style={{with: "100%"}}>
          <button className="btn btn-outline-primary" type="button" onClick={handleCountDown}>
            -
          </button>
          <span className="input-group-text px-5">{count}</span>
          <button className="btn btn-outline-primary" type="button" onClick={handleCountUp}>
            +
          </button>
        </div>
        <button className="btn btn-primary">Agregar al carrito
         </button>
      </div>
    </div>
  );
};

export default ItemCount;
