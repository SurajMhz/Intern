import React from 'react'
import useForm from "../Hooks/FormValidation"
import styles from "./FormValidation.module.css"


const FormValidation = () => {
  const { formData, errors, handleChange, handleSubmit } = useForm({
    defaultValue: {
      name: "",
      email: "",
      password: ""
    },
    validations: {
      name: { required: true, message: "Name required" },
      email: {
        required: true,
        validate: value => ({
          requirement: /\S+@\S+\.\S+/.test(value),
          message: "Invalid email"
        })
      },
      password: {
        required: true,
        validate: value => ({
          requirement: value.length >= 6,
          message: "At least 6 characters"
        })
      }
    }
  })

  const onSubmit = () => {
    console.log("Form Submitted.");
    console.log(formData);
    // formData={
    //   name: "",
    //   email: "",
    //   password: ""
    // }
  }

  return (
    <div className='contentDiv'>
      <h1>A simple Form Validation</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2>Form</h2>

        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className={styles.error}>{errors.name}</p>}

        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className={styles.error}>{errors.password}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormValidation;




