export const reducer = (state,action)=>{
        
     if(action.type==="INCREMENT")
     {
        const updatedCart=state.item.map((curElem)=>{
            if(curElem.id===action.payload)
            {
              if(curElem.quantity<=curElem.amount-1){    
              console.log(curElem.quantity)
                return {...curElem,quantity:curElem.quantity+1}
              }
            }
            return curElem;
        });
        
        return {...state,item:updatedCart}
        
     }
      if(action.type==="DECREMENT")
     {
        const updatedCart=state.item.map((curElem)=>{
            if(curElem.id===action.payload)
            {
              console.log(curElem.quantity)
              if(curElem.quantity>0){

                console.log(curElem.amount)
                return {...curElem,quantity:curElem.quantity-1}
              }
            }
            return curElem;
        });
        
        return {...state,item:updatedCart}
     }
     if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce(
          (accum, curVal) => {
            let { price, quantity } = curVal;
    
            let updatedTotalAmount = price * quantity;
            accum.totalAmount += updatedTotalAmount;
    
            accum.totalItem += quantity;
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

