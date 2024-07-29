import { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet, useNavigate} from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Root = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    navigate("/Page1")
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