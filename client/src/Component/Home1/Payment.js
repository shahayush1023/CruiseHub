import React, { useState } from "react";
import "./Payment.css";
import { checkRecord, getRecord, updateRecord } from "../../api/user";
import { NavLink, useNavigate } from "react-router-dom";
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
  let s3 = localStorage.getItem("amount>>");
  const navigate = useNavigate();
  const handlePayment = async () => {
    console.log("hello");
    const id = localStorage.getItem("dateId");
    let ava = JSON.parse(localStorage.getItem("ava"));
    const data = await updateRecord({ availability: ava, id }, config);
    console.log("UPdated data >>", data);
    if (data?.success) {
      alert("PAYMENT SUCCESFUL..THANL YOU FOR TRUSTING US");
      navigate("/thank");
    }
  };
  return (
    <div class="wrapper">
      <h2>Payment Form</h2>
      <form>
        <h4>Account</h4>
        <div class="input-group">
          <div class="input-box">
            <input type="text" placeholder="Full Name" class="name" required />
            <i class="fa fa-user icon"></i>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Nick Name" class="name" required />
            <i class="fa fa-user icon"></i>
          </div>
        </div>
        <div class="input-group">
          <div class="input-box">
            <input
              type="email"
              placeholder="Email Adress"
              required
              class="name"
            />
            <i class="fa fa-envelope icon"></i>
          </div>
        </div>
        <div class="input-group">
          <div class="input-box">
            <h4> Date of Birth</h4>
            <input type="text" placeholder="DD" class="dob" />
            <input type="text" placeholder="MM" class="dob" />
            <input type="text" placeholder="YYYY" class="dob" />
          </div>
          <div class="input-box">
            <h4> Gender</h4>
            <input
              type="radio"
              id="b1"
              name="gendar"
              checked
              class="radio"
              required
            />
            <label for="b1">Male</label>
            <input type="radio" id="b2" name="gendar" class="radio" required />
            <label for="b2">Female</label>
          </div>
        </div>
        <div class="input-group">
          <div class="input-box">
            <h4>Payment Details</h4>
            <input
              type="radio"
              name="pay"
              id="bc1"
              checked
              class="radio"
              required
            />
            <label for="bc1">
              <span>
                <i class="fa fa-cc-visa"></i> Credit Card
              </span>
            </label>
            <input type="radio" name="pay" id="bc2" class="radio" required />
            <label for="bc2">
              <span>
                <i class="fa fa-cc-paypal"></i> Paypal
              </span>
            </label>
          </div>
        </div>
        <div class="input-group">
          <div class="input-box">
            <input type="tel" placeholder="Card Number" class="name" required />
            <i class="fa fa-credit-card icon"></i>
          </div>
        </div>
        <div class="input-group">
          <div class="input-box">
            <input type="tel" placeholder="Card CVC" class="name" required />
            <i class="fa fa-user icon"></i>
          </div>
          <div class="input-box">
            <select>
              <option>01 jun</option>
              <option>02 jun</option>
              <option>03 jun</option>
            </select>
            <select>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
          </div>
        </div>
        <div class="input-group">
          <div class="input-box">
            <button onClick={handlePayment}>PAY NOW ${s3}</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
