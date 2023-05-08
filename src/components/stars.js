import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Stars = (stars,reviews) => {
    const productstars=Array.from({length:5},(curElm,index)=>{
       let number=index + 0.5;
       return(
        <span key={index}>
         {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
        </span>
       )
    })
    return ( 
        <div className="stars">
            {productstars}
            
        </div>
     );
}
 
export default Stars;