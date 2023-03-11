import React, { useContext, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Item from "./Item";
import { CartContext } from "./Home1";
import { checkRecord, getRecord, updateRecord } from "../../api/user";
// import { getShipData } from "../../api/user";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const config = {
  method: "POST",
  "Content-Type": "application/json",
};

const Contextcart = () => {
  const { item, totalAmount, totalItem } = useContext(CartContext);

  const [date, setDate] = useState();
  const [availability, setAvailability] = useState([{seat:100},{seat:100},{seat:100},{seat:100},{seat:100},{seat:100}]);

  const handleInput = (e) => {
    setDate(e.target.value);
  };

  const navigate = useNavigate();

  const handleBooking = async (e) => {
    const tempDate = moment(date).format("DD-MM-YY");
    const data = await checkRecord({ date: tempDate }, config);
    console.log("hb data ", data);
    localStorage.setItem("dateId", data?.id);
    
    if (data?.success) {
      const record = await getRecord(data?.id);
      console.log(record)
      if (record.success) {
        setAvailability(record?.record.availability);
      }
    }
    else{
      setAvailability([{seat:100},{seat:100},{seat:100},{seat:100},{seat:100},{seat:100}])
    }
  };

  const handlePayment = async ()=>{
    const id = localStorage.getItem("dateId");
    const data = await updateRecord({availability:availability,id},config)
    console.log("UPdated data >>" , data);
    if(data?.success){
      alert("Payment Successfull!")
    }
  }
  console.log("Availability >> " , availability);
  return (
    <>
      <header>
        <div className="continue-shopping">
          {/* <img src={require("./arrow.png")} className="arrow-icon"></img> */}
          <h3 style={{fontFamily:'cursive',color:'green'}}>Please Select the Appropriate Date!!!</h3>
        </div>
      </header>
      <section className="main-cart-section">
        <div>
          <input type="date" style={{ width: "10%" }} onChange={handleInput} />
          <h1 style={{ width: "50%" }}>Selected Date:{date}</h1>
          <button onClick={handleBooking}>Book your Holiday</button>
        </div>
        <p className="total-items">
          You have <span className="total-items-count">{totalItem} </span>
          items booked
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map !== undefined &&
                item.map((curItem, index) => {
                  return (
                    <Item
                      availability={availability}
                      setAvailability={setAvailability}
                      index={index}
                      key={curItem.id}
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
          <button onClick={handlePayment}>Pay</button>
        </div>
      </section>
    </>
  );
};

export default Contextcart;
