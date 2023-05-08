
    import { FaMinus, FaPlus } from "react-icons/fa";
import "../css/singleproduct.css"

const CartAmountToggle2 = ({amount,setIncrease,setDecrease}) => {
    return ( 
        
            <span className="toggle-button-cart">
                <button onClick={()=>setDecrease()} className="decrease">
                    <FaMinus/>
                </button>
                <span className="amount"  >{amount}</span>
                <button onClick={()=>setIncrease()} className="setincrease">
                    <FaPlus/>
                </button>
            </span>
        
     );
}
 
export default CartAmountToggle2;
