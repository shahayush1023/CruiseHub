import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
const Order = () => {
  {localStorage.setItem("cnt",0)}
  let s1 = JSON.parse(localStorage.getItem("1"));
  let s2 = JSON.parse(localStorage.getItem("2"));
  let s3 = JSON.parse(localStorage.getItem("3"));
  let s4 = JSON.parse(localStorage.getItem("4"));
  let s5 = JSON.parse(localStorage.getItem("5"));
  let s6 = JSON.parse(localStorage.getItem("6"));
  let s7  = Number.parseInt(localStorage.getItem("amount>>"));
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
          border: "5px solid black",
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
        <tr >
          {s1 > 0 && (
            <>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>
                DELUXE ROOM
              </td>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>{s1}</td>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>
                ${parseInt(s1) * 30}
              </td>
            </>
          )}
        </tr>

        <tr>
          {s2 > 0 && (
            <>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>
                SUPER DELUXE ROOM
              </td>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>{s2}</td>
              <td style={{ border: "1px solid", padding: "10px" ,textAlign:'center'}}>
                ${parseInt(s2) * 50}
              </td>
            </>
          )}
        </tr>

        <tr>
          {s3 > 0 && (
            <>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>
                NORMAL ROOM
              </td>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>{s3}</td>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>
                ${parseInt(s3) * 20}
              </td>
            </>
          )}
        </tr>

        <tr>
          {s4 > 0 && (
            <>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>
                SLEEPER SEAT
              </td>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>{s4}</td>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>
                ${parseInt(s4) * 5}
              </td>
            </>
          )}
        </tr>

        <tr>
          {s5 > 0 && (
            <>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>
                RECLINER SEAT
              </td>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>{s5}</td>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>
                ${parseInt(s5) * 10}
              </td>
            </>
          )}
        </tr>

        <tr>
          {s6 > 0 && (
            <>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>
                NORMAL SEAT
              </td>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>{s6}</td>
              <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>
                ${parseInt(s6) * 15}
              </td>
            </>
          )}
        </tr>

        <tr>
         <td colspan="2" style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>
                TOTAL AMOUNT TO BE PAID IN $
          </td>
          <td style={{ border: "1px solid", padding: "10px",textAlign:'center' }}>
                ${s7}
          </td>
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
