import React, { useContext, useState } from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import Item from './Item'

import { CartContext } from './Home1'
const Contextcart = () => {
  // const[item,setItem]=useState(data)
  const {item,totalAmount,totalItem}=useContext(CartContext)
  return (
    <>
         <header>
        <div className="continue-shopping">
          <img src={require("./arrow.png")} className="arrow-icon"></img>
          <h3>Continue Booking</h3>
        </div>

        {/* <div className="cart-icon">
          <img src={require("./cart.png")}></img>
          <p>1</p>
        </div> */}
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
          {
            item.map((curItem)=>{
              return <Item key={curItem.id} {... curItem}/>
            })
          }
           
          </Scrollbars>
          </div>
          
        </div>

        <div className="card-total">
          <h3>Booking Total:<span>${totalAmount}</span></h3>
          <button>Pay</button>
        </div>
      </section>
    </>
  )
}

export default Contextcart

