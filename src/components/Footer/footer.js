import { Link } from "react-router-dom";
import './footer.css';
import './contacts'
import { Route, Routes } from 'react-router-dom';
import ContactUs from "./contacts";



const Footer = () => {
  
  return (
    
    <>
   
    
    <footer>
    <div className="foot">
    <Link to='home'>Home</Link>
    <Link to='contact'>Contact Us</Link>
    </div>
    <Routes>
        <Route path="contact" element={<ContactUs />} />
    </Routes>
               <div class="footer_first">
                    <div class="footer_inner_first">
                         <ul>
                              <li><a href='#'>Help</a></li>
                              <li><a href='#'>Contact us</a></li>
                              <li><a href='#'>Wild Adventures</a></li>
                         </ul>
                    </div>
                    <div class="footer_inner_second">
                         <ul>
                              <li><a href='#'>Discover</a></li>
                              <li><a href='#'>About us</a></li>
                              <li><a href='#'>Where to Go</a></li>
                         </ul>
                    </div>
                    <div class="footer_inner_third">
                         <ul>
                              <li><a href='#'>Services</a></li>
                              <li><a href='#'>My Account</a></li>
                              <li><a href='#'>Services</a></li>
                         </ul>
                    </div>
         
               </div>
              
               <div class="footer_second">
                    <p>Copyright ©2022 Tigranuhi Satik Tatev </p>
               </div>
          </footer>
    </>
  )
}

export default Footer;
