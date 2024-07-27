import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/MainIng/Root'
import Home from './pages/Home'
import "./styles/evryStyles.scss"
import Page2 from './pages/Page2'
import AccountHomePage from './components/Account/AccountHomePage'
import SingUp from './components/Account/SingUp'
import ContactUs from './FootherDetails/ContactUs'
import AboutUs from './FootherDetails/AboutUs'
import SSS from './FootherDetails/SSS'
import ProteinPage from './pages/ProteinPage'
import Login from './components/Account/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        index: true,
        path: "/Page1",
        element: <Home/>
      },
      {
        path:'/Page2',
        element: <Page2/>
      },
      {
        path:'/ProteinPage',
        element: <ProteinPage/>
      },
      {
        path:'/MyAccount',
        element:<AccountHomePage/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:'/SingUp',
        element:<SingUp/>
      },
      {
        path:'/ContactUs',
        element:<ContactUs/>
      },
      {
        path:"/AboutUs",
        element:<AboutUs/>
      },
      {
        path:"/SSS",
        element:<SSS/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
