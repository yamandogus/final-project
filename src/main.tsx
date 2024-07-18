import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import Home from './pages/Home'
import "./styles/evryStyles.scss"
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import MyAccount from './components/Account/MyAccount'
import SingUp from './components/Account/SingUp'
import ContactUs from './FootherDetails/ContactUs'
import AboutUs from './FootherDetails/AboutUs'

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
        path:'/Page3',
        element: <Page3/>
      },
      {
        path:'/MyAccount',
        element:<MyAccount/>
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
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
