import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import Page1 from './pages/Page1'
import "./styles/evryStyles.scss"
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import MyAccount from './Account/MyAccount'
import SingUp from './Account/SingUp'
import ContactUs from './Account/ContactUs'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        index: true,
        path: "/Page1",
        element: <Page1/>
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
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
