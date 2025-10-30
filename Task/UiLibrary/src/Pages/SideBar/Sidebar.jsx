import styles from "./Sidebar.module.css"
import React from "react"

 function Sidebar({ activePage, onSelect,navItems }) {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Menu</h2>
      {navItems.map(element => (
        <button
          key={element.id}
          className={`${styles.button} ${activePage === element.id ? styles.active : ""}`}
          onClick={() => onSelect(element.id)}
        >
          {element.label}
        </button>
      ))}
    </div>
  )
}

export default Sidebar;