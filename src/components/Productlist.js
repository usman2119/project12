import { useFilterContext } from "../context/Filter-Context";
import GridView from "./gridview";
import ListView from "./listview";

const ProductList = () => {
    const{filter_products,grid_view}=useFilterContext();

    if(grid_view ===true ){
        return <GridView products={filter_products}/>
    }
      if(grid_view === false){
      return <ListView products={filter_products}/>
     }
}
 
export default ProductList;