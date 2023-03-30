import React, { useContext, useEffect, useState } from "react";
import { getShipData } from "../../api/user";
import { data } from "./data";
import { CartContext } from "./Home1";
const Item = ({
  id,
  title,
  img,
  price,
  setAvailability,
  NumberOfseats,
  quantity,
  amount,
  availability,
  index,
}) => {
  const { increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info" >
        <div className="product-img">
          <img src={img} alt="image"  />
        </div>

        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="add-minus-quantity">
          <i
            class="fas fa-minus minus"
            onClick={() => {
              // console.log({quantity});
              let newAv = availability.map((item, itemIndex) => {
                if (itemIndex == index) {
                  console.log(quantity);
                  if (quantity > 0) {
                    return { seat: item.seat + 1 };
                  } else return { seat: item.seat };
                } else return item;
              });
              setAvailability(newAv);
              console.log("arr>>>>", newAv);
              localStorage.setItem("ava", JSON.stringify(newAv));
              decrement(id);
            }}
          ></i>
          <input type="text" disabled className="abcd" placeholder={quantity} />
          <i
            class="fas fa-plus add"
            onClick={() => {
              let newAv = availability.map((item, itemIndex) => {
                if (itemIndex == index && item.seat > 0) {
                  return { seat: item.seat - 1 };
                } else return item;
              });
              setAvailability(newAv);
              localStorage.setItem("ava", JSON.stringify(newAv));
              increment(id);
            }}
          ></i>
        </div>

        <div className="price">
          <h3>${price}</h3>
        </div>

        <div className="remove-item abcde">
          <h3>{availability[index]?.seat} available</h3>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Item;
