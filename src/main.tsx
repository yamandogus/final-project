import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme/theme'
import Root from './Root'
import Home from './pages/Home'
import "./styles/evryStyles.scss"
import ProductsDetails, { ProductLoader } from './pages/ProductDetails'
import AccountHomePage from './pages/AccountHomePage'
import PaymentPage from './pages/PaymentPage'
import { loader } from './components/Bestseller/Bestseller'
import AllProducts, { AllProLoader } from './pages/AllProducts'
import { userProfileLoader } from './components/Account/Informations/MyAccount'
import { LinksLoader } from './layout/Navbar'
import Categories, { CategoryLoader } from './pages/Categories'

import AboutUs from './components/FooterPages/AboutUs'
import SSS from './components/FooterPages/SSS'
import { userAddressLoader } from './services/paymentAddress'
import Account from './pages/Account'
import ContactUs from './components/FooterPages/ContactUs'


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
        path: "Account",
        element:<Account/>
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
        path: "ContactUs",
        element:<ContactUs/>
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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
