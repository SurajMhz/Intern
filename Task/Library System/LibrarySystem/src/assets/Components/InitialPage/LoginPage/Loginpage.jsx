import "./loginPage.css";
import { useState } from "react";
import InputBox from "../../InputBox/Button";


function LogInForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [epassword, setEpassword] = useState("")
    const [eemail, setEemail] = useState("");




    return(
        <>
        <form className="formContainer">
          <label className="topText">Login In</label>
          <InputBox
                    errorInput={eemail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
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

                    <label className="bottomLabel">Don't have a account? <input type="button" value="Sign Up"/></label>
        </form>
        </>
    )
}
export default LogInForm;