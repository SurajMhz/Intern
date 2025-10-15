import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HeadContain from './Header'
import Content from './Content'
import StudentPopup from './StudentPopup' 

import "./Home.css"

const Home = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [editData, setEditData] = useState(null)
  const navigate = useNavigate()
  const LoginData = localStorage.getItem("User")

  useEffect(() => {
    if (!LoginData) navigate("/")
  }, [LoginData, navigate])

  const handleAddClick = () => {
    setEditData(null)
    setShowPopup(true)
  }

  const handleEditClick = (student) => {
    setEditData(student)
    setShowPopup(true)
  }

  const handleClosePopup = () => setShowPopup(false)

  return (
    <>
      <HeadContain onAddClick={handleAddClick}/>
      <Content onEditClick={handleEditClick}/>
      {showPopup && (
        <StudentPopup
          data={editData}
          onClose={handleClosePopup}
        />
      )}
    </>
  )
}

export default Home
