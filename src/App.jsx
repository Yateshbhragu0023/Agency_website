import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WebsiteLayout from './Website/WebsiteLayout'
import Home from './Website/Pages/Home'
import Contact from './Website/Pages/Contact'
import Service from './Website/Pages/Service'
import Pricing from './Website/Pages/Pricing'
import About from './Website/Pages/About'
import Context from './context/Context'
import AdminLayout from './AdminPanel/AdminLayout'
import Dashboard from './AdminPanel/Compenents/Dashboard'
import Profile from './AdminPanel/Compenents/Profile'

export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <WebsiteLayout />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path: "/services",
            element: <Service />
          },
          {
            path: "/pricing",
            element: <Pricing />
          },
          {
            path: "/about",
            element: <About />
          }
        ]
      },
      {
        path: "admin",
        element : <AdminLayout/>,
        children : [
          {
            path : "",
            element : <Dashboard/>
          },
          {
            path : "profile",
            element : <Profile/>
          }
        ]
      }
    ]
  )

  return (
    <Context>
      <RouterProvider router={routes} />
    </Context>
  )
}
