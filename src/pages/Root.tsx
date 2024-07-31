import { useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import { Outlet, useNavigate} from 'react-router-dom'
import Footer from '../Layout/Footer'

const Root = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    navigate("/Home")
  },[])
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Root