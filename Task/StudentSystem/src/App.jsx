// import { useState } from 'react'
import React from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>

  );
}

export default App;

