import React, { useState } from "react"
import Sidebar from "./Pages/SideBar/Sidebar"
import MainPage from "./Pages/Main/page"
import InputPage from "./Pages/InputTypes/InputPage"
import ButtonPage from "./Pages/ButtonPage/ButtonPage"
import AccordionPage from "./Pages/AccordionPage/AccordionPage"
import FormValidation from "./Pages/FormValidation/formValidation"
import "./App.css"

export default function App() {
  const [activePage, setActivePage] = useState("main")


  // The main Sidebar data 
    const navItems = [
    { id: "main", label: "Main", element: <MainPage /> },
    { id: "Form", label: "Form", element: <FormValidation /> },
    { id: "InputPage", label: "Input", element: <InputPage /> },
    { id: "ButtonPage", label: "Button", element: <ButtonPage /> } ,
    { id: "AccordionPage", label: "Accordion", element: <AccordionPage /> } 

    // { id: "hello", label: "Yo Lo", element: <div className="page"><h2>Hello!</h2><p>Dynamic page here.</p></div> }
  ]
  
  // Shows the active element
  const activeItem = navItems.find(item => item.id === activePage)

  return (
    <div className="app">
      <Sidebar 
      activePage={activePage}  
      onSelect={setActivePage} 
      navItems={navItems}
      />

       <div className="content">
        {activeItem?.element || <h2>Page not found</h2>}
      </div>

    </div>
  )
}
