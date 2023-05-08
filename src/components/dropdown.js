import React from 'react'

const Dropdown = () => {
  return (
    <div className="dropdown" id="menu">
           <div className="box">
               <div className="row">
                   <div className="footer-col">
                       <h4>COMPANY</h4>
                       <ul>
                           <li><a href="/">PRIVACY POLICY</a></li>
                           <li><a href="/">ABOUT US</a></li>
                           <li><a href="/">OUR SERVICES</a></li>
                           
                       </ul>
                   </div>
                   <div className="footer-col">
                       <h4>GET HELP</h4>
                       <ul>
                           <li><a href="/">FAQ</a></li>
                           <li><a href="/">SHIPPING</a></li>
                           <li><a href="/">RETURNS</a></li>
                           <li><a href="/">ORDER DETAILS</a></li>
                       </ul>
                   </div>
                   <div className="footer-col">
                       <h4>SHOPPING</h4>
                       <ul>
                           <li><a href="/">TV'S</a></li>
                           <li><a href="/">MACHINES</a></li>
                           <li><a href="/">HOME APPLIANCES</a></li>
                           <li><a href="/">BAGS</a></li>
                       </ul>
                   </div>
                   <div className="footer-col">
                       <h4>SOCIAL LINKS</h4>
                       
                           <div className="social-links">
                           <a href="/"><i className="" ></i></a>
                           <a href="/"><i className="" ></i></a>
                           <a href="/"><i className="" ></i></a>
                           </div>
                       
                   </div>
                   
               </div>
           </div>
          </div>
  )
}

export default Dropdown