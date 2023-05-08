import PriceFormat from "../Helpers/PriceFormat";
import { useFilterContext } from "../context/Filter-Context";
import "../css/filtersection.css"
const FilterSection = () => {
    const{filters:{text,price,minPrice,maxPrice},updateFilterValue,all_products,clearFilters,sorting}=useFilterContext();

    const getUniqueData=(data,property)=>{
        let NewVal=data.map((curElem)=>{
            return curElem[property]
        })
        return NewVal=["All",...new Set(NewVal)]
    }

    const categorydata=getUniqueData(all_products,"category")
    return ( 
        <div className="filter-search">
          <div className="flex1">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
        <div className="category-filter">
            <h4>CATEGORY</h4>
            <div className=".filter-button">
                {
                    categorydata.map((curElem,index)=>{
                        return(
                            <ul>
                            <li>
                            <button
                            key={index}
                            name="category"
                            value={curElem}
                            type="button"
                            onClick={updateFilterValue}>
                                {curElem}
                            </button>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
        </div>
        <div className="flex2">
        <div className="filter-price">
            <p>{<PriceFormat price={price}/>}</p>
            <div className="price-range">
            <input style = {{ color :"white" }} value={price} max={maxPrice} min={minPrice} name="price" type="range" onChange={updateFilterValue}/>
            </div> 
        </div>

        <div className="sort-label">
        <form className="price-sort" action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onClick={sorting}>
            <option value="lowest">Price(Lowest)</option>
            <option value="#" disabled ></option>
            <option value="highest">Price(Highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
            <option value="#" disabled></option>
          </select>
        </form>
      </div>
        <div className="clear-filters">
          <button className="clear-filter" onClick={clearFilters}> Clear Filters</button>
        </div>
        </div>
      </div>
      
     );
}
 
export default FilterSection;