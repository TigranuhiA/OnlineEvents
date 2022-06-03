import React from "react";
import { Link  } from 'react-router-dom';
import {tour5, price} from "../helpers/constant";
import classes from './tour.module.css';
import {useUserInfo} from "../../../contexts/UserProvider";
import AddToFavorites from "../addToFavorites/AddToFavorites";
import {useState} from "react";
import './tours.css';
import axios from "axios";
import { useTranslate} from "../../../contexts/LanguageProvider"
const Tour5=()=>{
    const {user} = useUserInfo();
    const {t} = useTranslate();
    const [success, setSuccess]=useState(false)
    const {status, setStatus}=useState(true);
    const deletePost =() => {
        axios.delete('http://localhost:3001/homepage/tour5')
        .then(()=>setStatus(false))
    }
    
    return (
        <div className={classes.container}>
          <div>
          <h1>{t("tour5.title")}</h1>
             <img  className={classes.tour_item} src={tour5.t_img} alt="#" />
             <p>{t("tour5.text")}</p> 
          </div>           
          <h3>{t("price")}{tour5.price} {t("ՀՀ դրամ")}</h3>
               <button className={classes.btn} onClick={()=>
                    setSuccess(true)
            }> 
            {t("ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂՈՒՄ")}                  
                </button>
                {success && <div className={classes.fav}>
                    <h3>Ձեր զամբյուղը</h3>
                        <h4>{tour5.title}</h4>
                        {tour5.text}
                        </div>}
             {user && <AddToFavorites obj={tour5}/>}
             {<div>
                <div> <Link to="/login"> ԵԹԵ ՑԱՆԿԱՆՈՒՄ ԵՔ ՊԱՏՎԻՐԵԼ ՏՈՄՍ,  ՄՈՒՏՔ ԳՈՐԾԵՔ ԱՆՁՆԱԿԱՆ ԷՋ </Link> </div>  
            <div> <Link to="/login"> ԵԹԵ ԴԵՌ ՉԵՔ ԳՐԱՆՑՎԵԼ, ՍԵՂՄԵՔ ԱՅՍՏԵՂ </Link> </div>
            </div>
            }                                     
               <button className={sessionStorage.getItem('user')==='admin'?'show':'hide'} onClick={()=>deletePost()}>Delete</button>
               <button className={sessionStorage.getItem('user')==='admin'?'show':'hide'}>Edit</button>
               <button className={localStorage.getItem('user')==='admin'?'show':'hide'}>Delete</button>
               <button className={localStorage.getItem('user')==='admin'?'show':'hide'}>Edit</button>           
            
        </div>
    )
}

export default Tour5

