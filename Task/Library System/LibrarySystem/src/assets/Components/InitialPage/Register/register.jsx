import { use, useState } from "react";
import InputBox from "../../InputBox/Button";
import "./register.css"

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ename, setEname] = useState("")
    const [eemail, setEemail] = useState("");
    const [epassword, setEpassword] = useState("");



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

            alert("Form submitted successfully!");

            // reset form
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
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

                    <label className="bottomLabel">Already have a account? <input type="button" value="Log In"/></label>
            </form>
        
        </>
    )
}





export default Register;