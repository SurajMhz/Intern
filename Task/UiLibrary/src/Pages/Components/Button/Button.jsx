import React from "react"
import styles from "./Button.module.css"

export default function Button({ children, color = "blue", size = "md", className = "", ...props }) {
  const finalClass = `${styles.button} ${styles[size]} ${className}`
  return (
    <button className={finalClass} style={{ "--button-color": color }} {...props}>
      {children}
    </button>
  )
}
