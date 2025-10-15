import React from 'react'
import "./Header.css"

const HeadContain = ({ onAddClick }) => {
  return (
    <div className='headCard'>
      <h1 className='Student-show'>Student Management System</h1>
      <button className='head-button' onClick={onAddClick}>+ Add Student</button>
    </div>
  )
}

export default HeadContain
