import React from 'react'
import classes from './register.module.css'
import { useForm } from "react-hook-form";

const Register = () => {
  const {register, handleSubmit, formSate: {errors, isValid}} = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={classes.title}> Create an account</h1>
          <label className={classes.label}>
            <h3>Register</h3>
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
             placeholder="Repeat your password" />
          </label>
          <div className={classes.div}> 
              {errors?.password && <p>{errors?.password?.message || "Error"}</p>}
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
            <input className={classes.submit} type="submit" disabled={!isValid}  />
          </label>
        </form>
  )
}

export default Register;