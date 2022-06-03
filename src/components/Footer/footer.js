
import './footer.css';
import './contacts'
import ContactUs from "./contacts";
import { useTranslate } from "../../contexts/LanguageProvider";
import { useState } from "react";



const Footer = () => {
  const {t} = useTranslate()
  const[isContact, setisContact]=useState(false);

  const click=()=>{
       setisContact(true)
  }
  
  return (
    
    <>
   
    <footer>
    <div className="foot">
    <a href='#'>{t("home")}</a>
    <a href='#' onClick={click}>{t("Contact Us")}</a>
    </div>
    {isContact && <ContactUs />}
   
    
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
