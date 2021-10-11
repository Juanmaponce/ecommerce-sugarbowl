import React from "react";
import ItemDetailContainer from './ItemDetailContainer';

const Item = ({ item }) => {
  return (
    <div className="col-md-2 m-5">
      <div className="card">
      <img src={item.img} className="card-img-top" alt="..."/>
        <div className="card-body d-flex justify-content-center flex-column">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text"><strong>Precio</strong> ${item.price}</p>
          <p className="card-text">Stock: {item.stock}</p>
          <ItemDetailContainer item={item} />
        </div>
      </div>
    </div>
  );
};

export default Item;
