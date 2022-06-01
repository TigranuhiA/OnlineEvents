import React from "react";
import {tour2} from "../helpers/constant"
import {price} from "../helpers/constant"
const Tour2=()=>{
    return (
        <div >
          <h1>{tour2.title}</h1>
          <img src={tour2.tour2_img} alt="#" />
           <p>{tour2.text}</p> 
           <h3>{price}</h3>
        </div>
    )
}

export default Tour2
