import { NavLink } from "react-router-dom";
import classNames from "classnames";
import classes from './header.module.css';

// const links = [
//     {

//     }
// ]
// const setActive = () => {({isActive}) => classNames(classes.link, {
//         [classes.active]: isActive
//     })
// }    // chshtel te inchi chi linum ayspes

const Header =() =>{
    return (
        <header className={classes.header}>
            <div className={classes.divName}>
                Travel with us
            </div>
            <div className={classes.divPhone}>
            Phone 000 000000
            </div>

            <ul className={classes.ul}>
                <li>
                    <NavLink className={({isActive}) => classNames(classes.link, {
                            [classes.active]: isActive
                        })} 
                        to="">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => classNames(classes.link, {
                            [classes.active]: isActive
                        })}
                        to="login">Log in</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => classNames(classes.link, {
                            [classes.active]: isActive
                        })} 
                        to="register">Register</NavLink>
                </li>
                <input className={classes.logOut} type="button" value="Log out"/>
            </ul>
        </header>
    )
}

export default Header;