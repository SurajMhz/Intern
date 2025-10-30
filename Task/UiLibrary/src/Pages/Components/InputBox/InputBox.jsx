import { useState } from "react";
import React from "react";

import styles from './InputBox.module.css';

function InputBox({ type="text", label="", icon="", value="", onChange,errorInput }) {
  

//show makes the passoword's content visible
const [show,setShow]=useState(true);

//pass entry for password type's eye button
let pass=false;

if(type.toLowerCase()=="password"){
  pass=true;
}
  return (
    <>
    <div className={`${styles.inputBox} ${errorInput ? styles.errorInput : ""}`}>
      
      <input
      className={styles.input}
       value={value} 
       onChange={onChange} 
       type={show?type.toLowerCase():"text"}
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