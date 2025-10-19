import React, { useState, useEffect } from 'react'
import styles from './StudentPopup.module.css'
import InputBox from "../../../InputBox/InputBox";
const StudentPopup = ({ editStudents, students, addStudent, data, onClose, deleteStudent, deleteData }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    id: '',
    course: '',
    year: '',
    gpa: '',
    grade: ''
  })

  useEffect(() => {
    if (data) setForm(data)
  }, [data])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const Proceed = () => {
    let Grade = "";
    if (form.gpa >= 3.7 && form.gpa <= 4.0) Grade = "A+";
    else if (form.gpa >= 3.3) Grade = "A";
    else if (form.gpa >= 3.0) Grade = "B+";
    else if (form.gpa >= 2.7) Grade = "B";
    else if (form.gpa >= 2.3) Grade = "C+";
    else if (form.gpa >= 2.0) Grade = "C";
    else if (form.gpa >= 1.7) Grade = "D+";
    else if (form.gpa >= 1.0) Grade = "D";
    else Grade = "F";

    const updatedForm = { ...form, grade: Grade }

    if (data) {
      // Edit existing student
      const updatedStudents = students.map(s =>
        s.id === data.id ? updatedForm : s
      )
      editStudents(updatedStudents)
      localStorage.setItem("Data", JSON.stringify(updatedStudents))
    } else {
      //Add new Data
      const existingIds = students.map(s => s.id)
      let newId = 1
      while (existingIds.includes(newId)) {
        newId++
      }
      const newStudent = { ...form, id: newId }
      addStudent(newStudent)
    }
    onClose()
  }
  function Validation(e) {
    e.preventDefault()
    let Error = false;

    // const TotalData = {
    //     name: form.name,
    //     email: form.email,
    //     course: form.course,
    //     id: form.id,
    //     year: form.year,
    //     gpa: form.gpa,
    //     grade: Grade
    // };

    if (!form.name) {

      Error = true;
    }

    if (!form.email) {

      Error = true;
    }
    // else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email.value)) {//regex pattern
    //     BelowEmail.textContent = "Enter a valid email";
    //     Error = true;
    // }

    if (!form.course) {

      Error = true;
    }

    if (!form.year) {

      Error = true;
    }

    if (!form.gpa) {

      Error = true;
    }

    if (!Error) {
      Proceed()
    }

  }


  const DeleteProcess = () => {

    const idToDelete=deleteData.id;
    const filteredStudents = students.filter(s => s.id !== idToDelete)

    const NewArray = filteredStudents.map((s, index) => ({
      ...s,
      id: index + 1
    }))
    deleteStudent(NewArray)
    onClose()
  }







  if (!deleteData) {
    return (
      <div className={styles.StudentPopUp}>
        <form id="Form" onSubmit={Validation}>
          <div className={styles.UpperForm}>
            <label>{data ? "Edit Student Data" : "Add New Student"}</label>
            <button type="button" onClick={onClose}>X</button>
          </div>

          <div className={styles.MidForm}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter student's full name"
              className={styles.FullName}
              name="name"
              value={form.name}
              onChange={handleChange}

            />
            <p className={styles.Error} id="BelowName"></p>

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              className={styles.Email}
              name="email"
              value={form.email}
              onChange={handleChange}

            />
            <p className={styles.Error} id="BelowEmail"></p>

            <label>Course</label>
            <select
              className={styles.Course}
              name="course"
              value={form.course}
              onChange={handleChange}

            >
              <option value="" disabled>Select course</option>
              <option value="bcsit">BCSIT</option>
              <option value="bba">BBA</option>
              <option value="engineering">Engineering</option>
            </select>
            <p className={styles.Error} id="BelowCourse"></p>

            <label>Academic Year</label>
            <select
              className={styles.AcademicYear}
              name="year"
              value={form.year}
              onChange={handleChange}

            >
              <option value="" disabled>Select year level</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
            </select>
            <p className={styles.Error} id="BelowYear"></p>

            <label>GPA</label>
            <input
              type="number"
              className={styles.GPA}
              name="gpa"
              min="0"
              max="4"
              step="0.01"
              placeholder="Enter GPA"
              value={form.gpa}
              onChange={handleChange}

            />
            <p className={styles.Error} id="BelowGpa"></p>



            {/* <InputBox
                    errorInput={""}
                    value={""}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    label="Your Name"
                    icon=""
                /> */}
          </div>

          <div className={styles.LowerForm}>
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit" id="FormAddButton">
              {data ? "Save Changes" : "Add Student"}
            </button>
          </div>
        </form>
      </div>
    )
  }
  else {
    return (
      <div className={styles.StudentPopUp}>
      <div className={styles.ConfirmBox}>
        <p>Are you sure you want to delete this student?</p>
        <div className={styles.ConfirmActions}>
          <button className={styles.CancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.DeleteBtn} onClick={DeleteProcess}>Delete</button>
        </div>
      </div>
      </div>
    )
  }

}

export default StudentPopup;
