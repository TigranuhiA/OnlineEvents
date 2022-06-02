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
                      
    
        </div>
    )
}

export default Tour1