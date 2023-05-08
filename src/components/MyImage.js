import { useState } from "react";
import "../css/singleproduct.css"
const MyImage = ({imgs=[{url:""}]}) => {
    const[mainImage,setmaiImage]=useState(imgs[0])
    return ( 
        <div className="images">
            <div className="grid ">
                {imgs.map((curElm,index)=>{
                    return(
                    <figure>
                        <img
                         src={curElm.url}
                         alt={curElm.filename}
                         key={index}
                         className="product--img"
                         onClick={()=>setmaiImage(curElm)}
                        />
                    </figure>
                    )
                })}
            </div>
            
            <div className="main-image">
                <img src={mainImage.url} alt={mainImage.filename}/>
            </div>
            </div>
        
     );
}
 
export default MyImage;