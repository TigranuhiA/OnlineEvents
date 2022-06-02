import React from "react";
import {tour5} from "../helpers/constant";
import {price} from "../helpers/constant"
import { useTranslate} from "../../../contexts/LanguageProvider"


const Tour5=()=>{
    const {t} = useTranslate();
    return (
        <div >
          <h1>{t("tour5.title")}</h1>
          <img src={tour5.tour5_img} alt="#" />
           <p>{t("tour5.text")}</p> 
           <h3>{t("price")}</h3>
        </div>
    )
}

export default Tour5