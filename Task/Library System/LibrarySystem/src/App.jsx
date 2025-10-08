import StartingPage from "./assets/Components/InitialPage/index.jsx"
import MainPage from "./assets/Components/MainPage/Main/page.jsx"
import "./App.css"
import { useState } from "react"
function App() {
  const [letin,setLetin]=useState("Nopass")
  return (
    <>
       {letin=="Nopass" && <StartingPage MainPage={() => setLetin("Pass")}/>}
        {letin=="Pass" && <MainPage/>}
    </>
  )
}

export default App
