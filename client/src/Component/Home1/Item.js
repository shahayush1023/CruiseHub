import React, { useContext, useEffect, useState } from "react";
import { getShipData } from "../../api/user";
import { data } from "./data";
import { CartContext } from "./Home1";
const Item = ({ id, title, img, price, NumberOfseats, quantity, shipData }) => {
  const { increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="image" />
        </div>

        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="add-minus-quantity">
          <i class="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" className="abcd" placeholder={quantity} />
          <i class="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>

        <div className="price">
          <h3>${price}</h3>
        </div>

        <div className="remove-item abcde">
          <h3>{shipData.NumberOfseats} available</h3>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Item;
