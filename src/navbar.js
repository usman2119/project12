import React, {  useRef, useState } from 'react'
import "./css/header.css"
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useLocation } from 'react-router-dom'
import Home2 from './Home2';

import { useAuth0 } from "@auth0/auth0-react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
    const { loginWithRedirect ,loginWithPopup,isAuthenticated,logout,user} = useAuth0();
    // const userName=JSON.parse(localStorage.getItem("user"))
    const location=useLocation();
    const[show,toggleshow]=useState(false)
    const[showi,toggleshowi]=useState(false)
    let menubar=useRef()
  return (
    <div>
        <div className="navbar-container">
        <nav className="flex">
            <div className="logo">NICKE</div>
            <ul>
                <li><a href="/">HOME</a></li>
                
                <li>
                    <a href="/products">PRODUCTS
                        {/* <i className="fa fa-caret-down"></i> */}
                    </a>
                    {/* <ul>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">ACCESORIES</a></li>
                        <li><a href="/">SOCIAL LINKS</a></li>
                    </ul> */}
                </li>

                <li><a href="/login">LOGIN/SIGNIN </a></li>
                <li><a href="/contact">CONTACT US</a></li>
            {isAuthenticated ?(
                <li className='profile'>
                    <span onClick={()=>toggleshowi(!showi)}>
                 {user.name.slice(5,11)}
                 <i ><MdOutlineArrowDropDown/></i>
                 </span>
                 {showi &&
                    <li onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</li>
                }
              </li>
            ):(
                <li className="profile">  <button onClick={() => loginWithPopup()}>Log In</button>  </li>
            )}
                <span onClick={()=>toggleshow(!show)}><li className="menu"><i><FiMenu /></i> MENU</li></span>
            </ul>
        </nav>
       
    </div>
    {show &&
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
}
   
 
    </div>
  )
}

export default Navbar