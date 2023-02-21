import React, { useContext, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Item from "./Item";
import { CartContext } from "./Home1";
import { getShipData } from "../../api/user";
const Contextcart = () => {
  // const[item,setItem]=useState(data)
  const { item, totalAmount, totalItem } = useContext(CartContext);
  const [shipData, setShipData] = useState();

  const handleData = async () => {
    const data = await getShipData();
    setShipData(data);
    console.log(shipData);
  };

  useEffect(() => {
    handleData();
  }, []);
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src={require("./arrow.png")} className="arrow-icon"></img>
          <h3>Continue Booking</h3>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Booking Your Seat1</h1>
        <p className="total-items">
          You have <span className="total-items-count">{totalItem} </span>
          items booked
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map !== undefined &&
                shipData !== undefined &&
                item.map((curItem, index) => {
                  return (
                    <Item
                      key={curItem.id}
                      shipData={shipData[index]}
                      {...curItem}
                    />
                  );
                })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Booking Total:<span>${totalAmount}</span>
          </h3>
          <button>Pay</button>
        </div>
      </section>
    </>
  );
};

export default Contextcart;
