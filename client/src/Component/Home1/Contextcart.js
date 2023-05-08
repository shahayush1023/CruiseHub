import React, { useContext, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Item from "./Item";
import { CartContext } from "./Home1";
import { checkRecord, getRecord, updateRecord } from "../../api/user";
// import { getShipData } from "../../api/user";
import { NavLink, useNavigate } from "react-router-dom";
import moment from "moment";
import { data as DATA } from "./data";
import { LinkContainer } from "react-router-bootstrap";
const config = {
  method: "POST",
  "Content-Type": "application/json",
};

const Contextcart = () => {
  const { item, totalAmount, totalItem, increment } = useContext(CartContext);

  const [date, setDate] = useState("");
  const [availability, setAvailability] = useState([
    { seat: 100 },
    { seat: 100 },
    { seat: 100 },
    { seat: 100 },
    { seat: 100 },
    { seat: 100 },
  ]);

  const handleInput = (e) => {
    setDate(e.target.value);
    localStorage.setItem("cnt", 0);
  };

  const navigate = useNavigate();

  const handleBooking = async (e) => {
    if (date === "") navigate("/");

    const d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let aa = date.substring(6, 7);
    let bb = date.substring(8);
    console.log("ayush", date);
    console.log("selected month", aa);
    console.log("todays month", month);

    if (aa < month) {
      alert("select the correct date");
      navigate("/");
    } else if (aa >= month) {
      // console.log("ayushi");
      if (bb < day) {
        alert("select the correct date");
        navigate("/");
      }
    }

    localStorage.setItem(1, 0);
    localStorage.setItem(2, 0);
    localStorage.setItem(3, 0);
    localStorage.setItem(4, 0);
    localStorage.setItem(5, 0);
    localStorage.setItem(6, 0);
    localStorage.setItem("cnt", 1);

    const tempDate = moment(date).format("DD-MM-YY");
    const data = await checkRecord({ date: tempDate }, config);
    console.log("hb data ", data);
    localStorage.setItem("dateId", data?.id);

    if (data?.success) {
      const record = await getRecord(data?.id);
      console.log(record);
      if (record.success) {
        setAvailability(record?.record.availability);

        for (let i = 0; i < DATA.length; i++) {
          DATA[i].amount = record?.record?.availability[i]?.seat;
        }
        console.log("data>>>>", DATA);
        console.log("api data>>>>", record?.record?.availability);
      }
    } else {
      setAvailability([
        { seat: 100 },
        { seat: 100 },
        { seat: 100 },
        { seat: 100 },
        { seat: 100 },
        { seat: 100 },
      ]);
      for (let i = 0; i < DATA.length; i++) {
        DATA[i].amount = 100;
      }
    }
  };

  const handlePayment = async () => {
    const id = localStorage.getItem("dateId");
    const data = await updateRecord({ availability: availability, id }, config);
    console.log("UPdated data >>", data);
    if (data?.success) {
      alert("Payment Successfull!");
      window.location.reload();
    }
  };
  console.log("Availability >> ", availability);
  return (
    <>
      <header>
        <div className="continue-shopping"></div>
      </header>
      <section className="main-cart-section">
        <div style={{}}>
          <div style={{ marginLeft: "540px" }}>
            <p>Select the Appropriate Date!!!!!</p>

            <input
              type="date"
              style={{
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                outline: "none",
                transition: "all 0.3s ease-in-out",
                width: "20%",
              }}
              onChange={handleInput}
            />

            <h5
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "20px",
                color: "#4CAF50",
              }}
            >
              Selected Date:{date}
            </h5>
          </div>
          <button
            onClick={handleBooking}
            style={{
              marginLeft: "-42px",
              backgroundColor: "lightgreen",
              width: "100%",
              border: "none",
              borderRadius: "0px",
            }}
          >
            Book your Holiday
          </button>
        </div>
        <p className="total-items" style={{ marginTop: "40px" }}>
          You have <span className="total-items-count">{totalItem} </span>
          items booked
        </p>
        {console.log("cnt>>", localStorage.getItem("cnt"))}
        {localStorage.getItem("cnt") == 1 ? (
          <div className="cart-items" style={{ marginLeft: "-27px" }}>
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
        ) : (
          <div></div>
        )}

        <div className="card-total">
          <h3>
            Booking Total:<span>${totalAmount}</span>
          </h3>

          {localStorage.getItem("cnt") == 1 ? (
            <LinkContainer to="/order">
              <NavLink>
                <button>CheckOut</button>
              </NavLink>
            </LinkContainer>
          ) : (
            <LinkContainer to="/home1">
              <NavLink>
                <button>CheckOut</button>
              </NavLink>
            </LinkContainer>
          )}
        </div>
      </section>
    </>
  );
};

export default Contextcart;
