import { NavLink } from "react-router-dom";
import classNames from "classnames";
import classes from './header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { removeUser, userSelector } from "../../reduxToolkit/slices/userSlice";


// const links = [
//     {

//     }
// ]
// const setActive = () => {({isActive}) => classNames(classes.link, {
//         [classes.active]: isActive
//     })
// }    // chshtel te inchi chi linum ayspes

const Header =() => {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);

    const logOut = () =>{
        sessionStorage.removeItem("user")
        localStorage.removeItem("user")
        dispatch(removeUser())
    }


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
            </ul>

            <div className={classes.headerInfo}>
                {user && <input className={classes.link} type="button" onClick={logOut} value='Log out'/>}
                {user && <div className={classes.userLogo}>{user}</div>}
            </div>
        </header>
    )
}

export default Header;