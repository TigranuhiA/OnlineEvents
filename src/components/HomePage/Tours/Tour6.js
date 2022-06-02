import React from "react";
import {tour6} from "../helpers/constant";
import {price} from "../helpers/constant"

const Tour6=()=>{
    return (
        <div >
          <h1>{tour6.title}</h1>
          <img src={tour6.t_img} alt="#" />
           <p>{tour6.text}</p> 
           <h3>{price}</h3>
        </div>
    )
}

export default Tour6