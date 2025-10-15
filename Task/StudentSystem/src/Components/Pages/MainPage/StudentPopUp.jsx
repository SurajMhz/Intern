import React, { useState, useEffect } from 'react'
import './StudentPopup.css'

const StudentPopup = ({ data, onClose }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (data) {
      console.log("Edited student:", form)
    } else {
      console.log("Added new student:", form)
    }
    onClose()
  }

  return (
    <div className="StudentPopUp">
      <form id="Form" onSubmit={handleSubmit}>
        <div className="UpperForm">
          <label>{data ? "Edit Student Data" : "Add New Student"}</label>
          <button type="button" onClick={onClose}>X</button>
        </div>

        <div className="MidForm">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter student's full name"
            className="FullName"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <p className="Error" id="BelowName"></p>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <p className="Error" id="BelowEmail"></p>

          <label>Student ID</label>
          <input
            type="number"
            placeholder="123.."
            className="StudentId"
            name="id"
            value={form.id}
            onChange={handleChange}
            readOnly={!!data} // lock ID when editing
            required
          />
          <p className="Error" id="BelowId"></p>

          <label>Course</label>
          <select
            className="Course"
            name="course"
            value={form.course}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select course</option>
            <option value="bcsit">BCSIT</option>
            <option value="bba">BBA</option>
            <option value="engineering">Engineering</option>
          </select>
          <p className="Error" id="BelowCourse"></p>

          <label>Academic Year</label>
          <select
            className="AcademicYear"
            name="year"
            value={form.year}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select year level</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
          </select>
          <p className="Error" id="BelowYear"></p>

          <label>GPA</label>
          <input
            type="number"
            className="GPA"
            name="gpa"
            min="0"
            max="4"
            step="0.01"
            placeholder="Enter GPA"
            value={form.gpa}
            onChange={handleChange}
            required
          />
          <p className="Error" id="BelowGpa"></p>
        </div>

        <div className="LowerForm">
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit" id="FormAddButton">
            {data ? "Save Changes" : "Add Student"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default StudentPopup
