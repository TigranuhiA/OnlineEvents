import { useForm } from "react-hook-form";
import classes from './login.module.css'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {baseUrl} from "../../api/api";
import axios from "axios";
import {setUser} from "../../reduxToolkit/slices/userSlice";
import { useAuthRoute } from "../../contexts/RouteProvider"; 
import {useState} from "react";
import Register from "../Register/register";

const Login = () => {
    const [isAuthSucceed, setIsAuthSucceed] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {
        axios.get(`${baseUrl}/users`)
            .then(res => {
                const user = res.data.find(user => user.name === data.login && user.password === data.password)
                if (user) {
                    if(data.save) {
                        localStorage.setItem('user', user.name)
                    } else {
                        sessionStorage.setItem('user', user.name)
                    }
                    dispatch(setUser(data.login))
                     navigate('../homePage')
                } 
                else {
                    setIsAuthSucceed(false)
                    navigate('../register')
                }
            })
    }

    return (
      <div>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={classes.title}> USERS LOGIN</h1>
          <label className={classes.label}>
            <h3>Login</h3>
            <input className={classes.inputInfo} {...register("login", {
              required: "field must be required",
              minLength: {
                value:3,
                message: "The minimum length of the value 3"
              },
              maxLength: {
                value:20,
                message: "The max length of the value 20"
              }
            }
             )} 
             type="text" 
             placeholder="Enter your login" />
          </label>
            <div className={classes.div} > 
              {errors?.login && <p>{errors?.login?.message || "Error"}</p>}
            </div>


          <label className={classes.label}>
            <h3>Password</h3>
            <input className={classes.inputInfo} {...register("password", {
              required: "field must be required",
              minLength: {
                value:3,
                message: "The minimum length of the value 3"
              },
              maxLength: {
                value:20,
                message: "The max length of the value 20"
              }
            }
             )} 
             type="password" 
             placeholder="Enter your password" />
          </label>
          <div className={classes.div}> 
              {errors?.password && <p>{errors?.password?.message || "Error"}</p>}
          </div>
          <label>
                    <input type="checkbox" {...register('save')}/>
                    Remember me
                </label>
          <label>
            <input className={classes.submit} type="submit" value="Log in"  /> 
          </label>
        </form>

        {/* {
          isAuthSucceed || <button onClick={() => {<Register/>}}>You haven't got an account, go to register page</button>
         } */}
        
      </div>
    )
  }
  
  export default Login;