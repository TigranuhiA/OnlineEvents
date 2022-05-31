import React from "react";
import {tour5} from "../helpers/constant";
import {price} from "../helpers/constant"

const Tour5=()=>{
    return (
        <div >
          <h1>{tour5.title}</h1>
          <img src={tour5.tour5_img} alt="#" />
           <p>{tour5.text}</p> 
           <h3>{price}</h3>
        </div>
    )
}

export default Tour5