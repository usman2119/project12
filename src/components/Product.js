import React from "react";
import { NavLink } from "react-router-dom";
import PriceFormat from "../Helpers/PriceFormat";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    
      <div className="card">
        <div className="product-image">
        <figure  className="product-image">
          <img src={image} alt={name} />
          
        </figure>
        </div>

        <div className="card-data">
          <div className="card-data-flex">
            
            <h3 className="card-data">{name}</h3>
            <p className="card-data">{<PriceFormat price={price}/>}</p>
          </div>
        </div>
        <div className="details">
        <NavLink to={`/singlepage/${id}`}><p>Show More</p></NavLink></div>
      </div>
    
  );
};

export default Product;