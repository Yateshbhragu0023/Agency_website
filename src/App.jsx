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
import ViewProject from './AdminPanel/Compenents/Projects/ViewProject'
import AddProject from './AdminPanel/Compenents/Projects/AddProject'
import ViewReview from './AdminPanel/Compenents/Review/ViewReview'
import AddReview from './AdminPanel/Compenents/Review/AddReview'
import ViewService from './AdminPanel/Compenents/Service/ViewService'
import AddService from './AdminPanel/Compenents/Service/AddService'
import ViewTeam from './AdminPanel/Compenents/Team/ViewTeam'
import AddTeam from './AdminPanel/Compenents/Team/AddTeam'
import Login from './AdminPanel/Login'
import SignUp from './AdminPanel/SignUp'

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
          },
          {
            path : "project",
            element : <ViewProject/>
          },
          {
            path : "addproject",
            element : <AddProject/>
          },
          {
            path : "review",
            element : <ViewReview/>
          },
          {
            path : "addreview",
            element : <AddReview/>
          },
          {
            path : "service",
            element : <ViewService/>
          },
          {
            path : "addservice",
            element : <AddService/>
          },
          {
            path : "team",
            element : <ViewTeam/>
          },
          {
            path : "addteam",
            element : <AddTeam/>
          }
        ]
      },
      {
        path : 'loginadmin',
        element : <Login/>
      },
      {
        path : 'signupadmin',
        element : <SignUp/>
      }
    ]
  )

  return (
    <Context>
      <RouterProvider router={routes} />
    </Context>
  )
}
