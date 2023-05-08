import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartreducer";
import { useEffect } from "react";

const CartContext = createContext();
const newCartData=()=>{
  let localcartdata=localStorage.getItem("thapaCart");
  if(localcartdata=== []){
    return []
  }else{
    return JSON.parse(localcartdata)
  }
}
const initialState = {
  // cart: [],
  cart:newCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const ProductToCart = (id,  amount, product) => {
    
    dispatch({ type: "ADD_TO_CART", payload: { id,  amount, product } });
  };
  const RemoveItem=(id)=>{
    dispatch({type:"Remove_Items" ,payload:id})
  }
  const setIncrease=(id)=>{
    dispatch({type:"SET_INCREASE",payload:id})
    
  }
  const setDecrease=(id)=>{
    dispatch({type:"SET_DECREASE",payload:id})
    
  }
  useEffect(()=>{
    dispatch({type:"CART_TOTAL_AMOUNT"})
    localStorage.setItem("thapaCart",JSON.stringify(state.cart))
  },[state.cart])

  return (
    <CartContext.Provider value={{ ...state, ProductToCart,RemoveItem,setDecrease,setIncrease}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

