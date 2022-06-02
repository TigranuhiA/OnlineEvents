import React from "react";

import { Link  } from 'react-router-dom';
import {tour4, price} from "../helpers/constant";
import classes from './tour.module.css';
import {useUserInfo} from "../../../contexts/UserProvider";
import AddToFavorites from "../addToFavorites/AddToFavorites";
import {useState} from "react";

const Tour4=()=>{
    const {user} = useUserInfo();
   const [success, setSuccess]=useState(false)
  

    return (
        <div className={classes.container}>
          <div>
            <h1>{tour4.title}</h1>
             <img  className={classes.tour_item} src={tour4.t_img} alt="#" />
            <p>{tour4.text}</p> 
          </div>
              
           
           <h3>{price}{tour4.price} ՀՀ դրամ</h3>
               <button className={classes.btn} onClick={()=>
                    setSuccess(true)
            }>                   
                ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂՈՒՄ</button>
                {success && <div className={classes.fav}>
                    <h3>Ձեր զամբյուղը</h3>
                        <h4>{tour4.title}</h4>
                        {tour4.text}
                        </div>}
             {user && <AddToFavorites obj={tour4}/>}
            {<div> <Link to="/login"> ԵԹԵ ՑԱՆԿԱՆՈՒՄ ԵՔ ՊԱՏՎԻՐԵԼ ՏՈՄՍ,  ՄՈՒՏՔ ԳՈՐԾԵՔ ԱՆՁՆԱԿԱՆ ԷՋ </Link> </div>  }
            {<div> <Link to="/login"> ԵԹԵ ԴԵՌ ՉԵՔ ԳՐԱՆՑՎԵԼ, ՍԵՂՄԵՔ ԱՅՍՏԵՂ </Link> </div>}
                      
    

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