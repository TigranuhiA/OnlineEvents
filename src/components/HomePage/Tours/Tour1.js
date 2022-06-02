import React from "react";

import { Link  } from 'react-router-dom';
import {tour1, price} from "../helpers/constant";
import classes from './tour.module.css';
import {useUserInfo} from "../../../contexts/UserProvider";
import AddToFavorites from "../addToFavorites/AddToFavorites";
import {useState} from "react";

const Tour1=()=>{
    const {user} = useUserInfo();
   const [success, setSuccess]=useState(false)
  

    return (
        <div className={classes.container}>
          <div>
            <h1>{tour1.title}</h1>
             <img  className={classes.tour_item} src={tour1.t_img} alt="#" />
            <p>{tour1.text}</p> 
          </div>
              
           
           <h3>{price}{tour1.price} ՀՀ դրամ</h3>
               <button className={classes.btn} onClick={()=>
                    setSuccess(true)
            }>                   
                ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂՈՒՄ</button>
                {success && <div className={classes.fav}>
                    <h3>Ձեր զամբյուղը</h3>
                        <h4>{tour1.title}</h4>
                        {tour1.text}
                        </div>}
             {user && <AddToFavorites obj={tour1}/>}
            {<div> <Link to="/login"> ԵԹԵ ՑԱՆԿԱՆՈՒՄ ԵՔ ՊԱՏՎԻՐԵԼ ՏՈՄՍ,  ՄՈՒՏՔ ԳՈՐԾԵՔ ԱՆՁՆԱԿԱՆ ԷՋ </Link> </div>  }
            {<div> <Link to="/login"> ԵԹԵ ԴԵՌ ՉԵՔ ԳՐԱՆՑՎԵԼ, ՍԵՂՄԵՔ ԱՅՍՏԵՂ </Link> </div>}
                      
    

import {tour1} from "../helpers/constant";
import {num} from "../helpers/constant";
import classes from './tour.module.css';
import './tours.css';
import axios from "axios";
import { useState } from "react";
//import {useState, useContext} from "react"
//import {useMessages} from "../../contexts/MessagesProvider";
// import {useUserInfo} from "../../contexts/UserProvider";
import { useTranslate} from "../../../contexts/LanguageProvider"

const Tour1=()=>{
    const {status, setStatus}=useState(true);
   

    const deletePost =() => {
        axios.delete('http://localhost:3001/homepage/tour1')
        .then(()=>setStatus(false))
    }
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
               
               <button className={sessionStorage.getItem('user')==='admin'?'show':'hide'} onClick={()=>deletePost()}>Delete</button>
               <button className={sessionStorage.getItem('user')==='admin'?'show':'hide'}>Edit</button>
               <button className={localStorage.getItem('user')==='admin'?'show':'hide'}>Delete</button>
               <button className={localStorage.getItem('user')==='admin'?'show':'hide'}>Edit</button>
               


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