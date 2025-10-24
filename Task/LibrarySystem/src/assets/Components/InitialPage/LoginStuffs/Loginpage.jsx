import "./loginPage.css";
import { useState } from "react";
import InputBox from "../../InputBox/Button";

let LoginData = localStorage.getItem("LoginData")
  ? JSON.parse(localStorage.getItem("LoginData"))
  : { id: 1, name: "Suraj", email: "Suraj@", password: "Suraj" };
  

  
function LogInForm({Update,Togo}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [epassword, setEpassword] = useState("")
    const [eemail, setEemail] = useState("");


function loginIn(e){
e.preventDefault();
    LoginData.forEach(element => {
        if(email=="" || password==""){
            setEemail("Can't be empty")
            setEpassword("Can't be empty")

        }else
        
        if(email==element.email && password==element.password){
            localStorage.setItem("User",element.name)
            Update()  
        }else{
            setEemail("Invalid Data")
            setEpassword("Invalid Data")
        }
    });
}

    return(
        <>
        <form className="formContainer" onSubmit={loginIn}>
          <label className="topText">Login In</label>
          <InputBox
                    errorInput={eemail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    label="Enter Your Email"
                    icon="h"
                />
                <label className="error">{eemail}</label>
                <InputBox
                    errorInput={epassword}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    label="Enter Your Password"
                    icon="h"
                />
                <label className="error">{epassword}</label>
                <input
                    className="buttonForm"
                    type="submit"
                    placeholder="Submit" />

                    <label className="bottomLabel">Don't have a account? <input type="button" onClick={Togo} value="Sign Up"/></label>
        </form>
        </>
    )
}
export default LogInForm;