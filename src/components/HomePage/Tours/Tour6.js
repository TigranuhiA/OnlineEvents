import React from "react";
import {tour6} from "../helpers/constant";
import {price} from "../helpers/constant"
import { useTranslate} from "../../../contexts/LanguageProvider"


const Tour6=()=>{
    const {t} = useTranslate();
    return (
        <div >
          <h1>{t("tour6.title")}</h1>
          <img src={tour6.t_img} alt="#" />
           <p>{t("tour6.text")}</p> 
           <h3>{t("price")}</h3>
        </div>
    )
}

export default Tour6