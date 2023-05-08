import "../css/feature.css"
import { useProductContext } from "../context/ContextProvider";
import Product from "./Product";
const FeatureProducts=()=>{
    const{isLoading,featureProducts}=useProductContext()
    
   return(
    <div className="section">
    <div className="container">
      <div className="intro-data">Check Now</div>
      <hr/>
      <div className="common-heading">Our Feature Services</div>
      <div className="feature-products">
        {featureProducts.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  </div>
   )
}


export default FeatureProducts;