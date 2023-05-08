import {  BrowserRouter as Router,  Routes,  Route, } from "react-router-dom";
import Home from "./home";
import SinglePage from "./singlepage";

import Products from "./Products";
import CartPage from "./cartpage";
import Navbar from "./navbar";
import Footer from "./footer";
import Login from "./Login";
import Signup from "./Signup";
import Home2 from "./Home2";
import Contact from "./contact";
import { useAuth0 } from "@auth0/auth0-react";





function App() {
  const { isAuthenticated,loginWithPopup} = useAuth0();
return (
   <Router>
    <Navbar/>
    <Routes path="/" element={<Home/>}>
      <Route index element={<Home/>} />
      <Route path="/singlepage/:id" element={<SinglePage/>} />
      {isAuthenticated ?(
        <Route path="/cart" element={<CartPage/>}/>
      ):(
        <Route index element={<Home/>}/>
      )}
      
      <Route path="/products" element={<Products/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
   </Router>
);
}

export default App;
