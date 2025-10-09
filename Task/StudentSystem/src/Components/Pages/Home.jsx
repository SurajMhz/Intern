import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Home = () => {
    let LoginData = localStorage.getItem("User")
    const navigate = useNavigate("");

    useEffect(() => {
    if (!LoginData) {
      navigate("/");
    }
  }, [LoginData, navigate]);
  return (
    <>
    <div>
        <h1>hello</h1>
    </div>
    </>
  )
}

export default Home