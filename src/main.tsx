import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import Root from './Root'
import Home from './pages/Home/Home'
import "./styles/evryStyles.scss"
import ProductsDetails, { ProductLoader } from './pages/ProductDetails/ProductDetails'
import AccountHomePage from './pages/Account/AccountHomePage'
import Categories, { CategoryLoader } from './pages/Categories/Categories'
import { userAddressLoader } from './services/PaymentAddress'
import { SearchPropsPt } from './services/Type'
import ContactUs from './layout/Footer/components/ContactUs'
import { loader } from './components/Bestseller/BestsellerPage'
import { theme } from './theme/Themes'
import { LinksLoader } from './layout/Navbar/navbar'
import AllProducts, { AllProLoader } from './pages/AllProduct/AllProducts'
import { userProfileLoader } from './pages/Account/components/Informations/MyAccount'
import Account from './pages/Account/Account'
import AboutUs from './layout/Footer/components/AboutUs'
import SSS from './layout/Footer/components/SSS'
import PaymentPage from './pages/PaymentPage/PaymentPage'


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
