import Register from "./Register/register";
import LogInForm from "./LoginStuffs/Loginpage";
import MainPage from "../MainPage/Main/page";
import { useEffect } from "react";
import "./index.css"
import { useState } from "react";

function StartingPage(){
    const User=localStorage.getItem("User");
    const initialPage = User ? "Main" : "Main";
    const [currentPage, setCurrentPage] = useState(initialPage);
    //  useEffect(() => {
    //     const loggedUser = localStorage.getItem("User");
    //     if(loggedUser){
    //         setCurrentPage("Main");
    //     }
    // }, []);
    // if(d){j} goToRegister={() => setCurrentPage("register")}
    return(<>
    
    {currentPage === "Login" && (
      <div className="bodyContainer">
        <LogInForm 
          Update={() => setCurrentPage("Main")}
          Togo={() => setCurrentPage("Register")}
        />
        </div>
      )}
    
    {currentPage === "Register" && (
        <div className="bodyContainer">
        <Register 
        Update={() => setCurrentPage("Login")}
        Togo={() => setCurrentPage("Login")}
        />
        </div>
        )}
    {currentPage === "Main" && <MainPage />}
       {/* <div> {User &&
        (()=>{
            console.log(User)
            console.log("hello")
        })()
            
        }</div> */}
    
    </>)
}
export default StartingPage;
