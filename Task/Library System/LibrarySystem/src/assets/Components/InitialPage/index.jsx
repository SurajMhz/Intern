import Register from "./Register/register";
import LogInForm from "./LoginPage/Loginpage";
import "./index.css"
function StartingPage(){
    return(
    <div className="bodyContainer">
        <LogInForm/>
        <Register/> 
    </div>
    )
}
export default StartingPage;