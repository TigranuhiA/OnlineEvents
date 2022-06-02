import React from "react";

import { Link  } from 'react-router-dom';
import {tour3, price} from "../helpers/constant";
import classes from './tour.module.css';
import {useUserInfo} from "../../../contexts/UserProvider";
import AddToFavorites from "../addToFavorites/AddToFavorites";
import {useState} from "react";

const Tour3=()=>{
    const {user} = useUserInfo();
   const [success, setSuccess]=useState(false)
  

    return (
        <div className={classes.container}>
          <div>
            <h1>{tour3.title}</h1>
             <img  className={classes.tour_item} src={tour3.t_img} alt="#" />
            <p>{tour3.text}</p> 
          </div>
              
           
           <h3>{price}{tour3.price} ՀՀ դրամ</h3>
               <button className={classes.btn} onClick={()=>
                    setSuccess(true)
            }>                   
                ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂՈՒՄ</button>
                {success && <div className={classes.fav}>
                    <h3>Ձեր զամբյուղը</h3>
                        <h4>{tour3.title}</h4>
                        {tour3.text}
                        </div>}
             {user && <AddToFavorites obj={tour3}/>}
            {<div> <Link to="/login"> ԵԹԵ ՑԱՆԿԱՆՈՒՄ ԵՔ ՊԱՏՎԻՐԵԼ ՏՈՄՍ,  ՄՈՒՏՔ ԳՈՐԾԵՔ ԱՆՁՆԱԿԱՆ ԷՋ </Link> </div>  }
            {<div> <Link to="/login"> ԵԹԵ ԴԵՌ ՉԵՔ ԳՐԱՆՑՎԵԼ, ՍԵՂՄԵՔ ԱՅՍՏԵՂ </Link> </div>}
                      

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

export default Tour3