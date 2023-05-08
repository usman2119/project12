import { FaMinus, FaPlus } from "react-icons/fa";
import "../css/singleproduct.css"

const CartAmountToggle = ({amount,setIncrease,setDecrease}) => {
    return ( 
        
            <span className="toggle-button">
                <button onClick={()=>setDecrease()} className="setdecrease">
                    <FaMinus/>
                </button>
                <span className="amount"  >{amount}</span>
                <button onClick={()=>setIncrease()} className="set">
                    <FaPlus/>
                </button>
            </span>
        
     );
}
 
export default CartAmountToggle;