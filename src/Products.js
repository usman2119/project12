import FilterSection from "./components/Filtersection";
import Sort from "./components/sort";
import ProductList from "./components/Productlist";
import { useFilterContext } from "./context/Filter-Context";
import "./css/product.css"
const Products = () => {
  const { filter_products, } =useFilterContext;
    return ( 
        <div className="product-container">
        <div className="product-filter">
          <FilterSection />
          </div>
          
          <div className="product-main">
            <Sort/>
            
            <ProductList />
          </div>
        
      </div>
     );
}
 
export default Products;