import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import Page1 from './pages/Page1'
import "./styles/evryStyles.scss"
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

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
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
