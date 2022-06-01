import React from "react";
import {tour1} from "../helpers/constant";
import {price, num} from "../helpers/constant";
import classes from './tour.module.css';
import {useState, useContext} from "react"
// import {useUserInfo} from "../../contexts/UserProvider";


const Tour1=()=>{
    // const {user} = useUserInfo()
    // const[userBalance, setUserBalance]=useState("")
    return (
        <div className={classes.container}>
          <h1>{tour1.title}</h1>
          <img  className={classes.tour_item} src={tour1.t_img} alt="#" />
           <p>{tour1.text}</p> 
           
           <h3>{price}{tour1.price} ՀՀ դրամ</h3>
          
               <button type="submit">ADD to favorites</button>

               <div className={classes.ticketBuy}>
                 
                <button>ԳՆԵԼ  տոմս</button>
                <h5>{num}</h5>              
                  <input type="number"/>  
                  <button type="submit">Հաստատել</button>
              <p>{tour1.balance}{tour1.price-2000}</p>
           </div>
           
        </div>
    )
}

export default Tour1