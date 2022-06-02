import React from "react";
import {tour3} from "../helpers/constant";
import {price} from "../helpers/constant";

const Tour3=()=>{
    return (
        <div >
          <h1>{tour3.title}</h1>
          <img src={tour3.tour3_img} alt="#" />
           <p>{tour3.text}</p> 
           <h3>{price}</h3>
        </div>
    )
}

export default Tour3