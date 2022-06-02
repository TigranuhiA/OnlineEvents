import React from "react";
import {tour4} from "../helpers/constant";
import {price} from "../helpers/constant"
import { useTranslate} from "../../../contexts/LanguageProvider"


const Tour4=()=>{
    const {t} = useTranslate();
    return (
        <div >
          <h1>{t("tour4.title")}</h1>
          <img src={tour4.tour4_img} alt="#" />
           <p>{t("tour4.text")}</p> 
           <h3>{t("price")}</h3>
        </div>
    )
}

export default Tour4