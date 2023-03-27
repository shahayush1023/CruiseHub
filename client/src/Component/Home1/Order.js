import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
const Order = () => {
  let s1 = JSON.parse(localStorage.getItem("1"));
  let s2 = JSON.parse(localStorage.getItem("2"));
  let s3 = JSON.parse(localStorage.getItem("3"));
  let s4 = JSON.parse(localStorage.getItem("4"));
  let s5 = JSON.parse(localStorage.getItem("5"));
  let s6 = JSON.parse(localStorage.getItem("6"));
  console.log(s1);
  console.log(s2);
  console.log(s3);
  console.log(s4);
  console.log(s5);
  console.log(s6);
  return (
    <div style={{ margin: "auto" }}>
      <table
        style={{
          border: "1px solid",
          marginTop: "180px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <tr style={{ margin: "2px" }}>
          <th style={{ border: "1px solid", padding: "10px" }}>SEAT/ROOM</th>
          <th style={{ border: "1px solid", padding: "10px" }}>QUANTITY</th>
          <th style={{ border: "1px solid", padding: "10px" }}>
            AMOUNT TO BE PAID
          </th>
        </tr>
        <tr>
          {s1 > 0 && (
            <>
              <td style={{ border: "1px solid", padding: "10px" }}>
                DELUXE ROOM
              </td>
              <td style={{ border: "1px solid", padding: "10px" }}>{s1}</td>
              <td style={{ border: "1px solid", padding: "10px" }}>
                {parseInt(s1) * 30}
              </td>
            </>
          )}
        </tr>

        <tr>
          {s2 > 0 && (
            <>
              <td style={{ border: "1px solid", padding: "10px" }}>
                SUPER DELUXE ROOM
              </td>
              <td style={{ border: "1px solid", padding: "10px" }}>{s2}</td>
              <td style={{ border: "1px solid", padding: "10px" }}>
                {parseInt(s2) * 50}
              </td>
            </>
          )}
        </tr>

        <tr>
          {s3 > 0 && (
            <>
              <td style={{ border: "1px solid", padding: "10px" }}>
                NORMAL ROOM
              </td>
              <td style={{ border: "1px solid", padding: "10px" }}>{s3}</td>
              <td style={{ border: "1px solid", padding: "10px" }}>
                {parseInt(s3) * 20}
              </td>
            </>
          )}
        </tr>

        <tr>
          {s4 > 0 && (
            <>
              <td style={{ border: "1px solid", padding: "10px" }}>
                SLEEPER SEAT
              </td>
              <td style={{ border: "1px solid", padding: "10px" }}>{s4}</td>
              <td style={{ border: "1px solid", padding: "10px" }}>
                {parseInt(s4) * 5}
              </td>
            </>
          )}
        </tr>

        <tr>
          {s5 > 0 && (
            <>
              <td style={{ border: "1px solid", padding: "10px" }}>
                RECLINER SEAT
              </td>
              <td style={{ border: "1px solid", padding: "10px" }}>{s5}</td>
              <td style={{ border: "1px solid", padding: "10px" }}>
                {parseInt(s5) * 10}
              </td>
            </>
          )}
        </tr>

        <tr>
          {s6 > 0 && (
            <>
              <td style={{ border: "1px solid", padding: "10px" }}>
                NORMAL SEAT
              </td>
              <td style={{ border: "1px solid", padding: "10px" }}>{s6}</td>
              <td style={{ border: "1px solid", padding: "10px" }}>
                {parseInt(s6) * 15}
              </td>
            </>
          )}
        </tr>
      </table>

      <button style={{ width: "23%", marginLeft: "600px" }}>
        <LinkContainer to="/payment">
          <NavLink>PROCEED TO PAY</NavLink>
        </LinkContainer>
      </button>
    </div>
  );
};

export default Order;
