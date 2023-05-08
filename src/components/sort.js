import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/Filter-Context";
import "../css/sort.css"
const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView,sorting  } =
    useFilterContext();
  return (
    <div className="sort-section">
      {/* 1st column  */}
      <div className="product-data">
        <p> NO. OF PRODUCTS AVAILABLE :{`${filter_products.length} `}</p>
        </div>
      <div className="sorting-list">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}>
            <p>Grid View</p>
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={setListView}>
            <p>List View</p>
          <BsList className="icon" />
        </button>
      </div>
      {/* 2nd column  */}
      
      
      
   </div>
  )
}
 
export default Sort;