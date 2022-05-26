import { useForm } from "react-hook-form";
import classes from './login.module.css'
// import { useNavigate } from "react-router-dom";


const Login = () => {
    // const navigate = useNavigate();

  
    const {register, handleSubmit, formSate: {errors, isValid}} = useForm();
    const onSubmit = (data) => {
      alert(JSON.stringify(data))
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
            <input className={classes.submit} type="submit" disabled={!isValid}  />
          </label>
        </form>

        <button>Create an account</button>
        
      </div>
    )
  }
  
  export default Login;