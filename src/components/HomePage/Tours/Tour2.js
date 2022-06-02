import React from "react";
import { Link  } from 'react-router-dom';
import {tour2, price} from "../helpers/constant";
import classes from './tour.module.css';
import {useUserInfo} from "../../../contexts/UserProvider";
import AddToFavorites from "../addToFavorites/AddToFavorites";
import {useState} from "react";

const Tour2=()=>{
    const {user} = useUserInfo();
   const [success, setSuccess]=useState(false)
  

    return (
        <div className={classes.container}>
          <div>
            <h1>{tour2.title}</h1>
             <img  className={classes.tour_item} src={tour2.t_img} alt="#" />
            <p>{tour2.text}</p> 
          </div>
              
           
           <h3>{price}{tour2.price} ՀՀ դրամ</h3>
               <button className={classes.btn} onClick={()=>
                    setSuccess(true)
            }>                   
                ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂՈՒՄ</button>
                {success && <div className={classes.fav}>
                    <h3>Ձեր զամբյուղը</h3>
                        <h4>{tour2.title}</h4>
                        {tour2.text}
                        </div>}
             {user && <AddToFavorites price={tour2.price}/>}
            {<div> <Link to="/login"> ԵԹԵ ՑԱՆԿԱՆՈՒՄ ԵՔ ՊԱՏՎԻՐԵԼ ՏՈՄՍ,  ՄՈՒՏՔ ԳՈՐԾԵՔ ԱՆՁՆԱԿԱՆ ԷՋ </Link> </div>  }
            {<div> <Link to="/login"> ԵԹԵ ԴԵՌ ՉԵՔ ԳՐԱՆՑՎԵԼ, ՍԵՂՄԵՔ ԱՅՍՏԵՂ </Link> </div>}
                      
    
        </div>
    )
}

export default Tour2