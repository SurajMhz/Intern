import React, { useState } from "react"
import styles from "./Accordion.module.css"

export default function Accordion({ title = "Accordion Title", children, className = "" }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.accordion} ${className}`}>
      <button className={styles.header} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className={styles.icon}>{open ? "−" : "+"}</span>
      </button>

      {open && <div className={styles.content}>{children}</div>}
    </div>
  )
}

