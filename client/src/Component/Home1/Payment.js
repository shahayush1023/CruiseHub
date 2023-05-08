import React, { useState } from "react";
import "./Payment.css";
import {
  checkRecord,
  getRecord,
  updateRecord,
  createPayment,
} from "../../api/user";

import { NavLink, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { LinkContainer } from "react-router-bootstrap";
const config = {
  method: "POST",
  "Content-Type": "application/json",
};
const Payment = () => {
  const [availability, setAvailability] = useState([
    { seat: 100 },
    { seat: 100 },
    { seat: 100 },
    { seat: 100 },
    { seat: 100 },
    { seat: 100 },
  ]);
  let s3 = Number.parseInt(localStorage.getItem("amount>>"));
  console.log(s3);
  const navigate = useNavigate();
  const handlePayment = async () => {
    console.log("hello");
    const id = localStorage.getItem("dateId");
    let ava = JSON.parse(localStorage.getItem("ava"));
    const paymentInfo = await createPayment({
      totalPrice: s3,
    });

    if (paymentInfo) {
      alert("Payment Success");
      const data = await updateRecord({ availability: ava, id }, config);
      console.log("UPdated data >>", data);
      if (data?.success) {
        navigate("/thank");
      }
    } else {
      alert("Payment Unsuccessfull :( ");
    }
  };
  return (
    <>
      <div class="row">
        <div class="col-75">
          <div class="container">
            <div class="row">
              <div class="col-50">
                <h3>BOOKING DETAILS</h3>
                <label for="fname">
                  <i class="fa fa-user"></i> Full Name
                </label>
                <input type="text" id="fname" name="firstname" />
                <label for="email">
                  <i class="fa fa-envelope"></i> Email
                </label>
                <input type="text" id="email" name="email" />
                <label for="adr">
                  <i class="fa fa-address-card-o"></i> Address
                </label>
                <input type="text" id="adr" name="address" />
                <label for="city">
                  <i class="fa fa-institution"></i> City
                </label>
                <input type="text" id="city" name="city" />

                <div class="row">
                  <div class="col-50">
                    <label for="state">MOBILE NO:</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="9109393992"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StripeCheckout
        token={handlePayment}
        stripeKey="pk_test_51MqZIESGLFcWMWvs3u7Ni4o4gr61ko93JWphtaFqkzLOnUu37OSMRlKtllbbek48xLkyAZvgDSnR4HjZpTYl3AOc00daGWwqsW"
        amount={s3 * 100}
        style={{ marginLeft: "700px", fontSize: "250px", fontWeight: "400px" }}
      />
    </>
  );
};

export default Payment;
