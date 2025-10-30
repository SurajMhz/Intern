import React from "react"
import Button from "../Components/Button/Button"

const ButtonPage = () => {
  return (
    <div className="contentDiv">
      <h1>Button Component</h1>

      <p>This button can change color and size using props.</p>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button color="blue">Default Button</Button>
        <Button color="red" size="sm">Small Button</Button>
        <Button color="green" size="lg">Large Button</Button>
        <Button color="orange" className="customBtn">Custom Styled</Button>
      </div>

      <br />
      <p>
        You can pass props like <code>color</code> and <code>size</code>.<br />
        Example: <code>{`<Button color="red" size="sm">Delete</Button>`}</code><br />
        <hr />
        You can also add your own <code>className</code> to style it however you like.
      </p>

      <p>
        <b>Available sizes:</b> <code>sm</code>, <code>md</code>, <code>lg</code><br />
        <b>Color:</b> any CSS color value (e.g., red, blue, green, #333, etc.)<br />
        <b>Custom styling:</b> pass your own class using <code>className</code>.
      </p>
    </div>
  )
}

export default ButtonPage
