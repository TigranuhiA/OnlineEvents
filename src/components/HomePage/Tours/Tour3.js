import React from "react";
import {tour3} from "../helpers/constant";
import {price} from "../helpers/constant";
import { useTranslate} from "../../../contexts/LanguageProvider"


const Tour3=()=>{
    const {t} = useTranslate();
    return (
        <div >
          <h1>{t("tour3.title")}</h1>
          <img src={tour3.tour3_img} alt="#" />
           <p>{t("tour3.text")}</p> 
           <h3>{t("price")}</h3>
        </div>
    )
}

export default Tour3