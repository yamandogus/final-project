import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import "./styles/evryStyles.scss"
import ProductsDetails, { ProductLoader } from './pages/ProductDetails'
import AccountHomePage from './pages/AccountHomePage'
import SingUp from './components/Account/SingUp'
import Login from './components/Account/Login'
import PaymentPage from './pages/PaymentPage'
import { loader } from './components/Bestseller/Bestseller'
import AllProducts, { AllProLoader } from './pages/AllProducts'
import { userProfileLoader } from './components/Account/Informations/MyAccount'
import { LinksLoader } from './Layout/Navbar'
import Categories, { CategoryLoader } from './pages/Categories'
import ContactUs from './components/FootherPages/ContactUs'
import AboutUs from './components/FootherPages/AboutUs'
import SSS from './components/FootherPages/SSS'
import { userAddressLoader } from './services/paymentAddress'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    loader:LinksLoader,
    children:[
      {
        index: true, 
        element: <Home/>,
        loader: loader,
      },
      {
        path: "Home",
        element: <Home/>,
        loader: loader,
      },
      {
        path: "products/:productSlug",
        element: <ProductsDetails />,
        loader: ProductLoader,
      },
      {
        path: "AllProducts",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        loader: AllProLoader as any,
        element: <AllProducts/>
      },
      {
        path:"/category/:id/:name",
        element:<Categories/>,
        loader:CategoryLoader,

      },
      {
        path: "MyAccount",
        loader: userProfileLoader,
        element:<AccountHomePage/>
      },
      {
        path: "Login",
        element:<Login/>
      },
      {
        path: "SingUp",
        element:<SingUp/>
      },
      {
        path: "ContactUs",
        element:<ContactUs/>
      },
      {
        path: "AboutUs",
        element:<AboutUs/>
      },
      {
        path: "SSS",
        element:<SSS/>
      },
      {
        path: "PaymentPage",
        loader:userAddressLoader,
        element:<PaymentPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
