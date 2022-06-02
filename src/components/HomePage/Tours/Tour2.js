import React from "react";
import {tour2} from "../helpers/constant"
import {price} from "../helpers/constant"
import { useTranslate} from "../../../contexts/LanguageProvider"


const Tour2=()=>{
    const {t} = useTranslate();
    return (
        <div >
          <h1>{t("tour2.title")}</h1>
          <img src={tour2.tour2_img} alt="#" />
           <p>{t("tour2.text")}</p> 
           <h3>{t("price")}</h3>
        </div>
    )
}

export default Tour2
