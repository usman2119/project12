import { useCartContext } from "./context/cartcontext";
import CartItem from "./components/CartItems";
import PriceFormat from "./Helpers/PriceFormat";
import "./css/Cart.css"
import { NavLink } from "react-router-dom";
const CartPage = () => {
    const {cart,total_amount,shipping_fee}=useCartContext()
    console.log(cart)
    return (  

<div className="cart-container">
  <div className="sub-container">
        <div className="cart-heading ">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        </div>
        <hr className="hr"/>

        <div className="cart-item">
          {
            cart.map((curElem)=>{
              return <CartItem key={curElem.id} {...curElem}/>
            })
          }
        </div>
        <hr/>
        <div className="cart-categories">
          <div className="clear-continue">
          <NavLink to="/products">
            <button className="continue">
              
              <p className="continue-p">Continue Shopping</p></button>
              </NavLink>
            <button className="clear" ><p className="clear-p">Clear Cart</p></button>
          </div>
          
            
          
          </div>
          
          
        <div className="carttotal">
           <div className="cartamounttotal">
            <div className="total-price">
               <p className="total">Sub total:</p>
               <p className="total"><PriceFormat price={total_amount}/></p>
            </div>
            <div className="total-price">
              <p  className="total">Shipping Fee:</p>
              <p  className="total"><PriceFormat price={shipping_fee}/></p>
            </div>
          <hr className="line"/>
             <div className="total-price">
              <p  className="total">Order Fee:</p>
              <p  className="total"><PriceFormat price={shipping_fee + total_amount}/></p>
             </div>
        
          </div>
        
            </div>
          
      </div>

    );
}
 
export default CartPage;