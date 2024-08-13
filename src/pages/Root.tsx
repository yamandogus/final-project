import { useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import { Outlet, useLocation, useNavigate} from 'react-router-dom'
import Footer from '../Layout/Footer'

const Root = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname]);

  useEffect(()=>{
    navigate("/Home")
  },[navigate])


  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Root