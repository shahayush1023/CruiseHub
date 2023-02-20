import React, { createContext, useState,useReducer, useEffect } from "react";
import "./Home1.css";
import { reducer } from "./reducer";
import { data } from "./data";
import Contextcart from "./Contextcart";
export const CartContext=createContext();

const initialState={
    item:data,
    totalAmount:0,
    totalItem:0

} 
const Home1 = () => {
  // const[item,setItem]=useState(data)
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment =(id)=>{
     return dispatch({
       type:"INCREMENT",
       payload:id
     });
  }
  const decrement=(id)=>{
      return dispatch({
          type:"DECREMENT",
          payload:id,
      });
  }
  useEffect(() => {
      dispatch({type:"GET_TOTAL"})
  },[state.item]); 
  
  return (
    <div className="abc">
      <h2 className="homeHeading">Featured Seat And Room</h2>
      
       <CartContext.Provider value={{...state,increment,decrement}}>
      <Contextcart/>
      </CartContext.Provider>
      
      
    </div>
  );
};

export default Home1;
