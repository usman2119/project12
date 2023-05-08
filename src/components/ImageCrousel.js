import React from 'react'
import Images from './Images'

const ImageCrousel = () => {
    let box=document.querySelector(".crousel-container")
    const btnpressnext=()=>{
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft+width;
        
    }
    const btnpresspre=()=>{
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft-width;
        
    }
  return (
    <div className='product-crousel'>
         <button className='pre-btn' onClick={btnpresspre}><p>&lt;</p></button>
         <button className='next-btn' onClick={btnpressnext}><p>&gt;</p></button>

         <div className="crousel-container">
            <Images imageno="1"/>
            <Images imageno="5"/>
            <Images imageno="6"/>
            <Images imageno="7"/>
            <Images imageno="8"/>
            <Images imageno="9"/>
            <Images imageno="10"/>
            <Images imageno="11"/>
            <Images imageno="12"/>
         </div>
    </div>
  )
}

export default ImageCrousel