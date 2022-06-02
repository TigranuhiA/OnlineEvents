import React from "react";
import {tour1} from "../helpers/constant";
import {price, num} from "../helpers/constant";
import classes from './tour.module.css';
import {useState, useContext} from "react"
// import {useUserInfo} from "../../contexts/UserProvider";
import { useTranslate} from "../../../contexts/LanguageProvider"

const Tour1=()=>{
    const {t} = useTranslate();
    // const {user} = useUserInfo()
    // const[userBalance, setUserBalance]=useState("")
    return (
        <div className={classes.container}>
          <h1>{t("tour1.title")}</h1>
          <img  className={classes.tour_item} src={tour1.t_img} alt="#" />
           <p>{t("tour1.text")}</p> 
           
           <h3>{t("price")}{tour1.price} {t("ՀՀ դրամ")}</h3>
          
               <button type="submit">{t("ADD to favorites")}</button>

               <div className={classes.ticketBuy}>
                 
                <button>{t("ԳՆԵԼ  տոմս")}</button>
                <h5>{t("num")}</h5>              
                  <input type="number"/>  
                  <button type="submit">{t("Հաստատել")}</button>
              <p>{t("tour1.balance")}{tour1.price-2000}</p>
           </div>
           
        </div>
    )
}

export default Tour1