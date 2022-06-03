import React from "react";
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
  
    //const [tour, setTour]=useState(tour1);
    const[isVisible, setisVisible]=useState(true);
    
    const deletePost=()=>{
        setisVisible(prev=>!prev);
    };
   
    // const deletePost =() => {
    //     axios.delete('http://localhost:3001/homepage/tour1')
    // }


    const {t} = useTranslate();
    // const {user} = useUserInfo()
    // const[userBalance, setUserBalance]=useState("")
    return (
     <div className={classes.container}>
      <div className={isVisible? 'divShow': 'divHide'}>
            <h1>{t("tour1.title")}</h1>
            <img  className={classes.tour_item} src={tour1.t_img} alt="#" />
            <p>{t("tour1.text")}</p> 
           
            <h3>{t("price")}{tour1.price} {t("ՀՀ դրամ")}</h3>
          
               <button type="submit">ADD to favorites</button>
               
               <button className={sessionStorage.getItem('user')==='admin'?'show':'hide'} onClick={deletePost}>Delete</button>
               <button className={sessionStorage.getItem('user')==='admin'?'show':'hide'}>Edit</button>
               
               
                <div className={classes.ticketBuy}>
                 <button>ԳՆԵԼ  տոմս</button>
                    <h5>{num}</h5>              
                     <input type="number"/>  
                     <button type="submit">{t("Հաստատել")}</button>
                    <p>{t("tour1.balance")}{tour1.price-2000}</p>
                </div>
        </div>
    </div>
    )
}

export default Tour1