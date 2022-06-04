import {useState} from "react";
import { tour1 } from "../helpers/constant";
import classes from './addToFavorites.module.css'



const AddToFavorites = () => {
    const [userBalance, setUserBalance] = useState(100000)

    return (   
           
           <div className={classes.ticketBuy}>
                                   
                    <button className={classes.buyTicket} onClick={()=>{
                      setUserBalance(userBalance-tour1.price)
                   }}>ԳՆԵԼ ՏՈՄՍ</button>
               <p>ՁԵՐ ՊԱՏՎԵՐԸ ԳՐԱՆՑՎԵԼ Է , ՁԵՐ ՀԱՇՎԻ ՄՆԱՑՈՐԴԸ ԿԱԶՄՈՒՄ Է {userBalance} ՀՀ ԴՐԱՄ</p>
            </div>    
       
    )
}

export default AddToFavorites
