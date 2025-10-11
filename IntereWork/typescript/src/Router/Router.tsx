import React from 'react'
import {Routes,Route} from "/react-router"
import {BrowserRouter} from "/react-router-dom"
import {Routes, Route } from 'react-router'

const Router = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default Router