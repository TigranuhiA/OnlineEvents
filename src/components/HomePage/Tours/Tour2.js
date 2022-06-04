import React from "react";
import { Link  } from 'react-router-dom';
import {tour2, price} from "../helpers/constant";
import classes from './tour.module.css';
import {useUserInfo} from "../../../contexts/UserProvider";
import AddToFavorites from "../addToFavorites/AddToFavorites";
import {useState} from "react";
import './tours.css';
import axios from "axios";
import { useTranslate} from "../../../contexts/LanguageProvider"
const Tour2=()=>{
    const {user} = useUserInfo();
    const {t} = useTranslate();
    const [success, setSuccess]=useState(false)
    // const {status, setStatus}=useState(true);
    // const deletePost =() => {
    //     axios.delete('http://localhost:3001/homepage/tour2')
    //     .then(()=>setStatus(false))
    // }
    
    return (
        <div className={classes.container}>
          <div>
          <h1>{t("tour2.title")}</h1>
             <img  className={classes.tour_item} src={tour2.t_img} alt="#" />
             <p>{t("tour2.text")}</p> 
          </div>           
          <h3>{t("price")}{tour2.price} {t("ՀՀ դրամ")}</h3>
               <button className={classes.btn} onClick={()=>
                    setSuccess(true)
            }> 
            {t("ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂՈՒՄ")}                  
                </button>
                {success && <div className={classes.fav}>
                    <h3>{t("Ձեր զամբյուղը")}</h3>
                        <h4>{tour2.title}</h4>
                        {tour2.text}
                        </div>}
             {user && <AddToFavorites obj={tour2}/>}
             {<div>
                <div> <Link to="/login"> {t("ԵԹԵ ՑԱՆԿԱՆՈՒՄ ԵՔ ՊԱՏՎԻՐԵԼ ՏՈՄՍ,  ՄՈՒՏՔ ԳՈՐԾԵՔ ԱՆՁՆԱԿԱՆ ԷՋ")} </Link> </div>  
            <div> <Link to="/login"> {t("ԵԹԵ ԴԵՌ ՉԵՔ ԳՐԱՆՑՎԵԼ, ՍԵՂՄԵՔ ԱՅՍՏԵՂ")} </Link> </div>
            </div>
            }                                     
               <button className={sessionStorage.getItem('user')==='admin'?'show':'hide'} onClick={()=>deletePost()}>{t("Delete")}</button>
                    
            
        </div>
    )
}

export default Tour2

 {/* <h1>{t("tour1.title")}</h1>
          <img  className={classes.tour_item} src={tour1.t_img} alt="#" />
           <p>{t("tour1.text")}</p> 
           
           <h3>{t("price")}{tour1.price} {t("ՀՀ դրամ")}</h3> */}