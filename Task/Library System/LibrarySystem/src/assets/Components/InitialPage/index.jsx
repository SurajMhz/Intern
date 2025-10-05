import Register from "./Register/register";
import LogInForm from "./LoginStuffs/Loginpage";
import MainPage from "../MainPage/page";
import { useEffect } from "react";
import "./index.css"
import { useState } from "react";

function StartingPage(){
    const User=localStorage.getItem("User");
    const initialPage = User ? "Main" : "Login";
    const [currentPage, setCurrentPage] = useState(initialPage);
    //  useEffect(() => {
    //     const loggedUser = localStorage.getItem("User");
    //     if(loggedUser){
    //         setCurrentPage("Main");
    //     }
    // }, []);
    // if(d){j} goToRegister={() => setCurrentPage("register")}
    return(
    <div className="bodyContainer">
    {currentPage === "Login" && (
        <LogInForm 
          Update={() => setCurrentPage("Main")}
          Togo={() => setCurrentPage("Register")}
        />
      )}
    
    {currentPage === "Register" && (
        <Register 
        Update={() => setCurrentPage("Login")}
        Togo={() => setCurrentPage("Login")}
        />
        )}
    {currentPage === "Main" && <MainPage />}
       {/* <div> {User &&
        (()=>{
            console.log(User)
            console.log("hello")
        })()
            
        }</div> */}
    </div>
    )
}
export default StartingPage;
