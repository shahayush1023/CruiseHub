export const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    const updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        if (curElem.quantity <= curElem.amount - 1) {
          console.log("quant>>",curElem.quantity +1)
          console.log("id>>",curElem.id)
          if(curElem.id==1)
          localStorage.setItem(curElem.id,curElem.quantity+1);
          else if(curElem.id==2)
          localStorage.setItem(curElem.id,curElem.quantity+1);
          else if(curElem.id==3)
          localStorage.setItem(curElem.id,curElem.quantity+1);
          else if(curElem.id==4)
          localStorage.setItem(curElem.id,curElem.quantity+1);
          else if(curElem.id==5)
          localStorage.setItem(curElem.id,curElem.quantity+1);
          else if(curElem.id==6)
          localStorage.setItem(curElem.id,curElem.quantity+1);
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
      }
      return curElem;
    });

    return { ...state, item: updatedCart };
  }
  if (action.type === "DECREMENT") {
    const updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        if (curElem.quantity > 0) {
          if(curElem.id==1)
          localStorage.setItem(curElem.id,curElem.quantity-1);
          else if(curElem.id==2)
          localStorage.setItem(curElem.id,curElem.quantity-1);
          else if(curElem.id==3)
          localStorage.setItem(curElem.id,curElem.quantity-1);
          else if(curElem.id==4)
          localStorage.setItem(curElem.id,curElem.quantity-1);
          else if(curElem.id==5)
          localStorage.setItem(curElem.id,curElem.quantity-1);
          else if(curElem.id==6)
          localStorage.setItem(curElem.id,curElem.quantity-1);
          return { ...curElem, quantity: curElem.quantity - 1};
        }
      }
      return curElem;
    });
    return { ...state, item: updatedCart,  };
  }
  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;

        let updatedTotalAmount = price * quantity;
        accum.totalAmount += updatedTotalAmount;

        accum.totalItem += quantity;
        localStorage.setItem("amount>>",accum.totalAmount);
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
  }
  return state;
};