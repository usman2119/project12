import React from "react";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/cartcontext";
import PriceFormat from "../Helpers/PriceFormat";
import "../css/cart-item.css";
import { MdDelete } from "react-icons/md";
import CartAmountToggle2 from "./CartAmountToggle2";

const CartItem = ({ id, name, image, color, price, amount,stock }) => {
  const { RemoveItem,setDecrease,setIncrease } = useCartContext();
  // const[amount , setAmount]=useState(1)
  // const setDecrease = () => {
  //   amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };

  // const setIncrease = () => {
  //    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };

  return (
    <div className="cart_heading ">
     
     <div className="items">
      <div className="cart-image">
        <div>
          <figure>
            <img className="image-cart" src={image} alt={id} />
          </figure>
        </div>
        <div className="detail-div">
          <div>
          <p className="details">{name}</p>
          </div>
          
          <div className="color-div">
            <p className="details">color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}></div>
          </div>
        </div>
      </div>
  </div>
          {/* price   */}
      
      <div className="items">
      <PriceFormat price={price}/>

      </div>
        
      
      

      {/* Quantity  */}
      <div className="items">
      <CartAmountToggle2
        amount={amount}
        setDecrease={()=>setDecrease(id)}
        setIncrease={()=>setIncrease(id)}
      />
      </div>
      

      {/* //Subtotal */}
      
      
        <div className="items">
          <PriceFormat price={price * amount} />
        </div>
      
      

     <div className="items">
      <button onClick={()=>RemoveItem(id)} className="delete">
      <MdDelete/>
      </button>
      </div>
      
        
        
      
    
    
    </div>
    
  );
};

export default CartItem;