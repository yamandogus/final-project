import { useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import { Outlet, useLocation} from 'react-router-dom'
import Footer from '../Layout/Footer'

const Root = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const isPagePayment = pathname === '/PaymentPage'

  return (
    <>
      {!isPagePayment && <Navbar />}
      <Outlet />
      {!isPagePayment && <Footer />}
    </>
  )
}

export default Root 
