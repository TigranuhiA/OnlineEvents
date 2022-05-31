import React from 'react';
// import {Redirect} from 'react-router-dom';
import {  Link,  Outlet } from 'react-router-dom';
import {IMAGES, tour_header} from "./helpers/constant";
import classes from './homePage.module.css';
import {CustomLink} from "./CustomLink"



const HomePage = () => {
//     const navigate = useNavigate();
//     const changePage = () => {
//         navigate("../homePage", {replace: true}) // vor istorian chpahi ogtagorcum enq  replace: true
// }
  return (
    <div >
      <div className={classes.tourHeader}>
        <h1>{tour_header}</h1>
      </div>
      <nav className={classes.container}>      
{
  IMAGES.map(item=>{
    return <div className={classes.item_div} key={item.path}>
            <Link to={item.path}> 
            <div  className={classes.tour_item} >
            <img src={item.tour_image} alt="#"/>
            <h3 className={classes.item_header}>{item.title}</h3>
          </div>
          </Link>
          
    </div>
   
  })
   
}

</nav>

      

<Outlet/>
          
    </div> 
    
  )
}

export default HomePage

