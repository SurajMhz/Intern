import { useState } from "react";
import React from "react";
import styles from './InputBox.module.css';

function InputBox({ type, label, icon, value, onChange,errorInput }) {
  let pass=false;


const [show,setShow]=useState(true);
  if(type=="password"){
    pass=true;
  }
  
  return (
    <>
    <div className={`${styles.inputBox} ${errorInput ? styles.errorInput : ""}`}>
      
      <input
      className={styles.input}
       value={value} 
       onChange={onChange} 
       type={show?type:"text"}
        placeholder=" "  />
      <i className={styles.icon}>{icon}</i>
      <label className={styles.label}>{label}</label>
    {pass && (
      <button
        type="button"
        className={styles.eye}
        onClick={()=>setShow(s=>!s)}
      >{show?"👁️":"🙈"}</button>
   )}

  </div>
    <label className={styles.errorLabel}>{errorInput}</label>
   
</>
  );
}

export default InputBox;