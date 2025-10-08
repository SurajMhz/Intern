import { use, useState } from "react";
import { useEffect } from "react";
import InputBox from "../../InputBox/Button";
import "./register.css"


function Register({Update,Togo}) {
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
            // console.log(newLogin)
            //react doen't support push like normal js
            // LoginData.push(newLogin);

            setLoginData(prev => [...prev, newLogin])
                // setLoginData(prev => [...prev, newLogin])
                //Its a asynchronous code
                // setLoginData(prev => {
                // const updated = [...prev, newLogin];
                // localStorage.setItem("LoginData", JSON.stringify(updated)); // save updated directly
                // return updated;
                // })

            //Alternative
            // useEffect(() => {
            // localStorage.setItem("LoginData", JSON.stringify(loginData));
            // }, [loginData]);
            // makes it so that when loginData is changed the useEffect runs and update

            // console.log(newLogin)
            // console.log(loginData)
            // localStorage.setItem("LoginData",JSON.stringify(loginData))
            //,JSON.stringfy()
            // alert("Form submitted successfully!");

            // reset form
            // setName("");
            // setEmail("");
            // setPassword("");
            Update()
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
                <label className="error">{ename}</label>
                <InputBox
                    errorInput={eemail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    label="Your Email"
                    icon="h" />
                <label className="error">{eemail}</label>
                <InputBox
                    errorInput={epassword}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    label="Enter your password"
                    icon="l" />
                <label className="error">{epassword}</label>
                <input
                    className="buttonForm"
                    type="submit"
                    placeholder="Submit" />

                <label className="bottomLabel">Already have a account? <input type="button" onClick={Togo}value="Log In" /></label>
            </form>

        </>
    )
}





export default Register;