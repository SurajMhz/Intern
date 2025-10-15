import { use, useState } from "react";
import React from "react";
import { useEffect } from "react";
import InputBox from "../InputBox/Button";
// import "./register.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {
            let LoginData = localStorage.getItem("User")
            const UserCheck = useNavigate("");
        
            useEffect(() => {
            if (LoginData) {
              UserCheck("/Home");
            }
          }, [LoginData, UserCheck]);



    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ename, setEname] = useState("")
    const [eemail, setEemail] = useState("");
    const [epassword, setEpassword] = useState("");
    const [loginData, setLoginData] = useState(
            localStorage.getItem("LoginData")
            ? JSON.parse(localStorage.getItem("LoginData"))
            : [{id: 1, name: "Suraj", email: "Suraj@gmail", password: "Suraj" }]
)
    useEffect(() => {
        localStorage.setItem("LoginData", JSON.stringify(loginData));
        },
         [loginData]
        );
const navigate = useNavigate();



    function Validation() {
        let valid = true;
        setEname("");
        setEemail("");
        setEpassword("");



        if (!name.trim()) {
            setEname("This field can't be empty.");
            valid = false;
        }
        if (!email.trim()) {
            setEemail("This field can't be empty.");
            valid = false;
        } else if (!email.includes("@")) {
            setEemail("Invalid email.");
            valid = false;
        }
        if (!password) {
            setEpassword("This field can't be empty.");
            valid = false;
        } else if (password.length < 6) {
            setEpassword("Password must be at least 6 characters");
            valid = false;
        }
        return valid;
    }

    function submitForm(e) {
        e.preventDefault();
        if (Validation()) {

            console.log("Form submitted:", { name, email, password });
            let newLogin={ name, email, password };
            setLoginData(prev => [...prev, newLogin])
            //after register
            navigate("/")
        }
    }
    return (
        <>
            <form className="formContainer" onSubmit={submitForm}>
                <label className="topText">Create account</label>
                <InputBox
                    errorInput={ename}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    label="Your Name"
                    icon="h"
                />
                <InputBox
                    errorInput={eemail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    label="Your Email"
                    icon="h" />
                <InputBox
                    errorInput={epassword}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    label="Enter your password"
                    icon="l" />

                <input
                    className="buttonForm"
                    type="submit"
                    placeholder="Submit" />

                <label className="bottomLabel">Already have a account?<Link to='/' className="lowerShow">Log in</Link></label>
            </form>

        </>
    )
}





export default Register;