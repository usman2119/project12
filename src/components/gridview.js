import Product from "./Product";


const GridView = ({products}) => {
    return ( 
        <div className="gridview">
            <div className="product-grid">
                {
                    products.map((curElem)=>{
                        return<Product key={curElem.id} {...curElem}/>
                    })
                }
            </div>
        </div>
     );
}

 
export default GridView;