const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, amount, product } = action.payload;
       
       let CartProduct;
       CartProduct={
         id,
          name:product.name,
          image:product.image[0].url,
          max:product.stock,
          amount,
          price:product.price,
          stock:product.stock
       }
 
       return{
        ...state,
        cart:[...state.cart,CartProduct],
       }
       }
       if(action.type === "SET_DECREASE"){
        let updatedProduct=state.cart.map((curElem)=>{
          if(curElem.id=== action.payload)
          {
            let decamount=curElem.amount -1;
            if(decamount<= 1){
              decamount=1
            }
            return{
              ...curElem,
              amount:decamount
            }
          }else{
            return curElem
          }
        })
        return{...state,cart:updatedProduct}
       }

       if(action.type === "SET_INCREASE"){
        let updatedProduct=state.cart.map((curElem)=>{
          if(curElem.id=== action.payload)
          {
            let incamount=curElem.amount +1;
            if(incamount>= curElem.max){
              incamount=curElem.max
            }
            return{
              ...curElem,
              amount:incamount
            }
          }else{
            return curElem
          }
        })
        return{...state,cart:updatedProduct}
       }

       if(action.type==="Remove_Items"){
        let updatedCart=state.cart.filter((curItem)=>curItem.id !== action.payload)
         return{
          ...state,
          cart:updatedCart,
         }
       }
       if(action.type === "CART_TOTAL_AMOUNT"){
         let total_amount= state.cart.reduce((initialVal,curElem)=>{
           let {price,amount}=curElem;
           initialVal= initialVal + price * amount;
           return initialVal
         },0)
         return{
          ...state,
          total_amount
         }
       }
       
       return state;
  };
  
  export default cartReducer;