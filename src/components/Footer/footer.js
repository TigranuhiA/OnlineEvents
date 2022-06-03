import { Link } from "react-router-dom";
import './footer.css';
import './contacts'
import { Route, Routes } from 'react-router-dom';
import ContactUs from "./contacts";
import { useTranslate } from "../../contexts/LanguageProvider";



const Footer = () => {
  const {t} = useTranslate()
  
  return (
    
    <>
   
    <footer>
    <div className="foot">
    <Link to='home'>{t("home")}</Link>
    <Link to='contact'>{t("Contact us")}</Link>
    </div>
   
    
               <div className="footer_first">
                    <div className="footer_inner_first">
                         <ul>
                              <li><a href='#'>{t("Help")}</a></li>
                              <li><a href='#'>{t("Contact us")}</a></li>
                              <li><a href='#'>{t("Wild Adventures")}</a></li>
                         </ul>
                    </div>
                    <div className="footer_inner_second">
                         <ul>
                              <li><a href='#'>{t("Discover")}</a></li>
                              <li><a href='#'>{t("About us")}</a></li>
                              <li><a href='#'>{t("Where to Go")}</a></li>
                         </ul>
                    </div>
                    <div className="footer_inner_third">
                         <ul>
                              <li><a href='#'>{t("Services")}</a></li>
                              <li><a href='#'>{t("My Account")}</a></li>
                              <li><a href='#'>{t("Services")}</a></li>
                         </ul>
                    </div>
         
               </div>
              
               <div className="footer_second">
                    <p>Copyright ©2022 Tigranuhi Satik Tatev </p>
               </div>
          </footer>
    </>
  )
}

export default Footer;
