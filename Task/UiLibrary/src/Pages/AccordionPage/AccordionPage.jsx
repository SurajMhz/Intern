import Accordion from "../Components/Accordion/Accordion"
import styles from "./AccordionPage.module.css"
export default function AccordionPage() {
  return (
    <div className="contentDiv">
      <h1>Accordion Component</h1>
    <br />
      <Accordion title="What is this?">
       Must have been the Accordion.
      </Accordion>
    <br />
      <Accordion title="Can I customize it?" className="customAccordion">
        Pass down <code>className</code>to edit or override CSS values.
      </Accordion>

      <p>
        <b>Props that can be passed:</b><br />
        <code>title</code> — heading of the accordion<br />
        <code>children</code> — content shown when open<br />
        <code>className</code> — for adding custom styles<br />
      </p>
    </div>
  )
}
