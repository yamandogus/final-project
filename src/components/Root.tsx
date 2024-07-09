import { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

const Root = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    navigate("/Page1")
  })
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Root