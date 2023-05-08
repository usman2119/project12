import Home2 from "./Home2";
import FeatureProducts from "./components/FeatureProducts";
import ImageCrousel from "./components/ImageCrousel";
import ImageSlider from "./components/imageSlider";
import Footer from "./footer";
import Navbar from "./navbar";
import SliderData from "./SliderData"
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from 'react-router-dom'
import ApiRoute from "./ApiRoute";

const Home = () => {
    const location=useLocation()
    const { user} = useAuth0();
    return ( 
        
    <div className="home-feature">
        
        <ImageSlider slider={SliderData}/>
        <FeatureProducts/>
        </div>
        
    );
}
 
export default Home;