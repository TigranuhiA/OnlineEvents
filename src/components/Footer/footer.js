import { Link } from "react-router-dom";
import './footer.css';
import './contacts'
import { Route, Routes } from 'react-router-dom';
import ContactUs from "./contacts";



const Footer = () => {
  
  return (
    
    <>
    
    <Link to='home'>Home</Link>
    <Link to='contact'>Contact Us</Link>
   
    <Routes>
        <Route path="contact" element={<ContactUs />} />
        
    </Routes>
    </>
  )
}

export default Footer;
