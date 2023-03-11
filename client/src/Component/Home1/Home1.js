import React, { createContext, useState, useReducer, useEffect } from "react";
import "./Home1.css";
import { reducer } from "./reducer";
import { data } from "./data";
import Contextcart from "./Contextcart";
import { getShipData } from "../../api/user";
export const CartContext = createContext();

let initialState = {
  item: data,
  totalAmount: 0,
  totalItem: 0,
  availability : [{seat:100},{seat:100},{seat:100},{seat:100},{seat:100},{seat:100}]
  
};
const Home1 = () => {
  const [shipData, setShipData] = useState();
  const [dataShip, setDataShip] = useState();

  const handleData = async () => {
    // const data = await getShipData();
    setShipData(data);
  };

  useEffect(() => {
    handleData();
  }, []);

  // const[item,setItem]=useState(data)
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = (id, NumberOfseats) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
      // availability:availability,
      // index:index
    });
  };
  const decrement = (id, NumberOfseats) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
      NumberOfseats: NumberOfseats,
    });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  return (
    <div className="abc">
      <h2 className="homeHeading">Featured Seat And Room</h2>

      <CartContext.Provider value={{ ...state, increment, decrement }}>
        <Contextcart />
      </CartContext.Provider>
    </div>
  );
};

export default Home1;
