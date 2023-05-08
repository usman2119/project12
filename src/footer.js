import React from 'react'
import { FaTwitter,FaFacebookF,FaWhatsapp } from "react-icons/fa";
import "./css/footer.css"
const Footer = () => {
  return (
    
        <div className="footer">
    <div className="footer-container">
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
                    <a href="/"><i className="" ><FaTwitter/></i></a>
                    <a href="/"><i className="" ><FaFacebookF/></i></a>
                    <a href="/"><i className=""><FaWhatsapp/></i></a>
                    </div>
                
            </div>
            
        </div>
    </div>
   
    </div>
  )
}

export default Footer