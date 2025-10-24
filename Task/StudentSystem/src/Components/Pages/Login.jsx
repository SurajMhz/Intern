import styles from "../PagesCss/Form.module.css";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import InputBox from "../InputBox/InputBox";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
let LoginData = localStorage.getItem("LoginData")
  ? JSON.parse(localStorage.getItem("LoginData"))
  : { id: 1, name: "Suraj", email: "Suraj@gmail", password: "Suraj" };


  
function LogInForm(){
        let User = localStorage.getItem("User")
        const navigate = useNavigate("");
    
        useEffect(() => {
        if (User) {
          navigate("/Home");
        }
      }, [User, navigate]);






    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [epassword, setEpassword] = useState("")
    const [eemail, setEemail] = useState("");


function loginIn(e){
  let status=true;
e.preventDefault();
    LoginData.forEach(element => {
        if(email==""){
          setEemail("Can't be empty")
        } 
        if (password==""){
            
            setEpassword("Can't be empty")

        }else
        
        if(email==element.email && password==element.password){
            localStorage.setItem("User",element.name)
              //afterLogin
              //process
              navigate("/home")
              status=false;
        }
    });
    if(status){
        if(email==""){
          setEemail("Can't be empty")
        } 
        if (password==""){
            
            setEpassword("Can't be empty")

        }else{
            setEemail("Invalid Data")
            setEpassword("Invalid Data")
        }
    }
}

    return(
        <>
        <form className={styles.formContainer} onSubmit={loginIn}>
          <label className={styles.topText}>Login In</label>
          <InputBox
                    errorInput={eemail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    label="Enter Your Email"
                    icon="h"
                />

                <InputBox
                    errorInput={epassword}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    label="Enter Your Password"
                    icon="h"
                />

                <input
                    className={styles.buttonForm}
                    type="submit"
                    placeholder="Submit" />

                    <label className={styles.bottomLabel}>Don't have a account? <Link to='/Register' className={styles.lowerShow}>Sign Up</Link></label>
        </form>
        </>
    )
}
export default LogInForm;