import { NavLink } from "react-router-dom";
import PriceFormat from "../Helpers/PriceFormat";

const ListView = ({products}) => {
    return ( 
        
        <div className="list_view">
            {
                products.map((curElem)=>{
                    const  { id, name, image,description, price, category } =curElem
                    return(
                        <NavLink to={`/singlepage/${id}`}>
                        <div className="list-view">
                    <div className="listing">
                        
                         <figure>
                         <img src={image} alt={name} />
                         </figure>
                        </div>
                       <div className="discription">
                    {/* slice used for to fix length of description */}
                        <p>{description.slice(0,99)}....</p>
                        <h3>{name}</h3>
                        <h4><PriceFormat price={price}/></h4>
                       </div>
                    </div>
                    </NavLink>
                    )
                })
            }
        </div>
        
     );
}
 
export default ListView;