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
    
    <Link to='home'>{t("home")}</Link>
    <Link to='contact'>{t("Contact Us")}</Link>
   
    <Routes>
        <Route path="contact" element={<ContactUs />} />
        
    </Routes>
    </>
  )
}

export default Footer;
