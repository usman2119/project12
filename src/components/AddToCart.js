import { useState } from "react";
import"../css/singleproduct.css"

import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";

import { useCartContext } from "../context/cartcontext";

const AddToCart = ({ product }) => {
  const { ProductToCart, } = useCartContext();

  const { id,  stock } = product;


  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div className="addtocart">
      

      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={() => ProductToCart(id,  amount, product)}>
        <button className="btn">Add To Cart</button>
      </NavLink>

      
      </div>
  )
     }
     export default AddToCart;