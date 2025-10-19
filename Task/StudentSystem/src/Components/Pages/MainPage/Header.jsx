import React from 'react'
import styles from "./Header.module.css"

const HeadContain = ({ onAddClick }) => {
  return (
    <div className={styles.headCard}>
      <h1 className={styles.Studentshow}>Student Management System</h1>
      <button className={styles.headButton} onClick={onAddClick}>+ Add Student</button>
    </div>
  )
}

export default HeadContain
