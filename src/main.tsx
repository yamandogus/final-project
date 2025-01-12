import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import Root from './Root'
import Home from './pages/Home'
import "./styles/evryStyles.scss"
import ProductsDetails, { ProductLoader } from './pages/ProductDetails'
import AccountHomePage from './pages/AccountHomePage'
import PaymentPage from './pages/PaymentPage'
import AllProducts, { AllProLoader } from './pages/AllProducts'
import { LinksLoader } from './layout/Navbar'
import Categories, { CategoryLoader } from './pages/Categories'
import { userAddressLoader } from './services/PaymentAddress'
import Account from './pages/Account'
import { SearchPropsPt } from './services/Type'
import { userProfileLoader } from './components/Account/Informations/MyAccount'
import AboutUs from './components/FooterPages/AboutUs'
import ContactUs from './components/FooterPages/ContactUs'
import SSS from './components/FooterPages/SSS'
import { loader } from './components/Bestseller/BestsellerPage'
import { theme } from './theme/Themes'


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
        
        loader: AllProLoader as ()=> Promise<{data: SearchPropsPt[]}>,
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
