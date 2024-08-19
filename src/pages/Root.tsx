import { useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import { Outlet, useLocation, useNavigate} from 'react-router-dom'
import Footer from '../Layout/Footer'

const Root = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const lacation = useLocation()

  const isPagePayment = lacation.pathname ==="/PaymentPage"

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname]);

  useEffect(()=>{
    navigate("/Home")
  },[navigate])


  return (
    <>
    {!isPagePayment && <Navbar/>}
    <div id='autlet'>
    <Outlet/>
    </div>
    {!isPagePayment && <Footer/>}
    
    </>
  )
}

export default Root