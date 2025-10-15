import React from 'react'
import './Content.css'

const Content = ({ onEditClick }) => {

  const sampleData = [
    { id: 1, name: 'Suraj Maharjan', course: 'CSIT', year: '2nd', grade: 'A', gpa: '3.8', email: 'suraj@gmail.com' },
    { id: 2, name: 'Suraj Maharjan', course: 'CSIT', year: '2nd', grade: 'A', gpa: '3.8', email: 'suraj@gmail.com' },
    { id: 3, name: 'Suraj Maharjan', course: 'CSIT', year: '2nd', grade: 'A', gpa: '3.8', email: 'suraj@gmail.com' },
    { id: 4, name: 'Suraj Maharjan', course: 'CSIT', year: '2nd', grade: 'A', gpa: '3.8', email: 'suraj@gmail.com' },
    { id: 5, name: 'Suraj Maharjan', course: 'CSIT', year: '2nd', grade: 'A', gpa: '3.8', email: 'suraj@gmail.com' },
  ]

  return (
    <div className='DataContainer'>
      {sampleData.map(student => (
        <div className='Card' key={student.id}>
          <div className='TopData'>
            <h3>{student.name}</h3>
          </div>
          <div className='MiddleData'>
            <table>
              <tbody>
                <tr><td>Course</td><td>{student.course}</td></tr>
                <tr><td>Year</td><td>{student.year}</td></tr>
                <tr><td>Grade</td><td>{student.grade}</td></tr>
                <tr><td>GPA</td><td>{student.gpa}</td></tr>
              </tbody>
            </table>
            <p>{student.email}</p>
          </div>
          <div className='BottomData'>
            <input type="button" value="Edit" onClick={() => onEditClick(student)}/>
            <input type="button" value="Delete" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Content
