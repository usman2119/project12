import { useEffect } from "react";
import { useProductContext } from "./context/ContextProvider";
import {useParams} from "react-router-dom"
import MyImage from "./components/MyImage";
import Stars from "./components/stars";
import AddToCart from "./components/AddToCart";
import PriceFormat from "./Helpers/PriceFormat";
import"./css/singleproduct.css"
const API="https://api.pujakaitem.com/api/products"

const SinglePage = () => {
    const{getSingleProduct,singleProduct,}=useProductContext()
   
    const {id}=useParams();
    const{
        name,
        image,
        stars,
        reviews,
        stock,
        amount,
        description,
        price
    }=singleProduct;
     useEffect(()=>{
        getSingleProduct(`${API}?id=${id}`);
     },[])
    return ( 
        <div className="single-format">
            
            <div className="product-images">
                <MyImage imgs={image} />
            </div>
            <div className="single-page-details">
            <p className="product-name">{name}</p>
            <div className="stars">
                <p>Ratings:</p>
                <Stars stars={stars} reviews={reviews} />
            </div>
            <div className="price">
                <h4><PriceFormat price={price}/></h4>
                <p>Original : <p><PriceFormat price={price + price*0.2}/></p></p>
            </div>
            <div singlepage-details >
            <p className="description">Description : {description}</p>
            {stock>0 && <h5 style={
             {
                marginLeft:"10px",
                marginTop:"10px"
             }
            }>Availablity: In Stock</h5>}
            <button  className="add-cart">
            {stock>0 && <AddToCart product={singleProduct}/>}
            </button>
            </div>
            </div>
        </div>
        
    );
}
 
export default SinglePage;