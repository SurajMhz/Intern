import { useState } from "react";
import "./Button.css";

function InputBox({ type, label, icon, value, onChange,errorInput }) {
  let pass=false;


const [show,setShow]=useState(true);
  if(type=="password"){
    pass=true;
  }
  
  return (

    <div className={`inputBox ${errorInput ? "errorInput" : ""}`}>
      
      <input
      className="input"
       value={value} 
       onChange={onChange} 
       type={show?type:"text"}
        placeholder=" "  />
      <i className="icon">{icon}</i>
      <label className="label">{label}</label>
    {pass && (
      <button
        type="button"
        className="eye"
        onClick={()=>setShow(s=>!s)}
      >{show?"👁️":"🙈"}</button>
   )}
    </div>

  );
}

export default InputBox;