import React from 'react'
import styles from './Content.module.css'

const Content = ({students, onEditClick,onDeleteClick }) => {
  return (
    <div className={styles.DataContainer}>
      {students.map(student => (
        <div className={styles.Card} key={student.id}>
          <div className={styles.TopData}>
            <h3>{student.name}</h3>
          </div>
          <div className={styles.MiddleData}>
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
          <div className={styles.BottomData}>
            <input type="button" value="Edit" onClick={() => onEditClick(student)}/>
            <input type="button" value="Delete" onClick={() => onDeleteClick(student)}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Content
