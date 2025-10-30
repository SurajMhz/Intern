import React, { useState } from "react"
import InputBox from "../Components/InputBox/InputBox"
import styles from "./InputPage.module.css"

export default function InputPage() {
  const [email, setEmail] = useState("")

//   const exampleCode = `
// <InputBox
//   errorInput=""
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
//   type="email"
//   label="Enter Your Email"
//   icon="h"
// />

// <InputBox
//   errorInput="error"
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
//   type="email"
//   label="Enter Your Email"
//   icon="h"
// />
//   `

  return (
    <div className={styles.contentDiv}>
      <h1>Input Box Component</h1>

      <InputBox />
      <p>
        The <code>InputBox</code> component accepts props like:
        <b> value</b>, <b>onChange</b>, <b>type</b>, <b>label</b>, <b>icon</b>, and <b>errorInput</b>.
        It allows custom error coloring and flexible usage.
      </p>
    <br />
      <h3>Example Usage 1</h3>

      <InputBox
        errorInput=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        label="Enter Your Email"
        icon="h"
      />
      <h3>Example code:</h3>
      <pre>
        <code>
          {` <InputBox
            errorInput=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            label="Enter Your Email"
            icon="h"
          />`}
        </code>
      </pre>
      <br />
            <h3>Example Usage 2</h3>
      <InputBox
        errorInput="error"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        label="Enter Your Email"
        icon="h"
      />
  <h3>Example code:</h3>
      <pre>
        <code>
          {` <InputBox
            errorInput="error"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            label="Enter Your Email"
            icon="h"
          />`}
        </code>
      </pre>
    </div>
  )
}
