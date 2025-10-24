import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HeadContain from './Header'
import Content from './Content'
import StudentPopup from './FormPopUP/StudentPopUp.jsx'
import styles from "./Home.module.css"

const Home = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [editData, setEditData] = useState(null)
  const [deleteData, setDeleteData] = useState(null)
  const [students, setStudents] = useState(
    localStorage.getItem("Data") ? JSON.parse(localStorage.getItem("Data")) : [
      { id: 1, name: 'Suraj Maharjan', course: 'CSIT', year: '2nd', grade: 'A', gpa: '3.8', email: 'suraj@gmail.com' },
      { id: 2, name: 'Suraj Maharjan', course: 'CSIT', year: '2nd', grade: 'A', gpa: '3.8', email: 'suraj@gmail.com' },
      { id: 3, name: 'Suraj Maharjan', course: 'CSIT', year: '2nd', grade: 'A', gpa: '3.8', email: 'suraj@gmail.com' },
      { id: 4, name: 'Suraj Maharjan', course: 'CSIT', year: '2nd', grade: 'A', gpa: '3.8', email: 'suraj@gmail.com' },
    ]
  );

  //makes it so that when students-- changes it automatically saves it in localStorage
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(students))
  }, [students])


  const navigate = useNavigate()
  const LoginData = localStorage.getItem("User")

  useEffect(() => {
    if (!LoginData) navigate("/")
  }, [LoginData, navigate])

  const handleAddClick = () => {
    setDeleteData(null)
    setEditData(null)
    setShowPopup(true)
  }

  const handleEditClick = (student) => {
    setEditData(student)
    setDeleteData(null)
    setShowPopup(true)
  }

   const handleDeleteClick = (student)=>{
    setDeleteData(student)
    setEditData(null)
    setShowPopup(true)
   }

  const handleClosePopup = () => setShowPopup(false)

  return (
    <>
      <HeadContain onAddClick={handleAddClick} />
      <Content students={students} onEditClick={handleEditClick} onDeleteClick={handleDeleteClick}/>
      {showPopup && (
        <StudentPopup
          addStudent={(newStudent) => setStudents([...students, newStudent])}
          editStudents={(Student) => setStudents(Student)}
          deleteStudent={(New) => setStudents(New)}
          students={students}
          data={editData}
          deleteData={deleteData}
          onClose={handleClosePopup}
        />
      )}
    </>
  )
}

export default Home
