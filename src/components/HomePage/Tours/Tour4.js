import React from "react";
import {tour4} from "../helpers/constant";
import {price} from "../helpers/constant"

const Tour4=()=>{
    return (
        <div >
          <h1>{tour4.title}</h1>
          <img src={tour4.tour4_img} alt="#" />
           <p>{tour4.text}</p> 
           <h3>{price}</h3>
        </div>
    )
}

export default Tour4