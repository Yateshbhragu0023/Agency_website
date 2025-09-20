import { useState } from 'react'
import { createContext } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

export const MainContext = createContext()
export default function Context({ children }) {

  const [Projects, setProjects] = useState([])
  const API_BASE_URL = "https://agency-backend-13.onrender.com"
  const project_URL = "/project"
  const admin_URL = "/admin"
  const ToastNotify = (msg, status) => toast(msg, { type: status == true ? 'success' : 'error' })

  const FetchAllProjects = () => {
    axios.get(API_BASE_URL + project_URL).then(
      (succes) => {
        setProjects(succes.data.project)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }


  return (
    <>
      <MainContext.Provider value={{API_BASE_URL , project_URL, FetchAllProjects , ToastNotify , Projects , setProjects}}>
        {children}
      </MainContext.Provider>
      <ToastContainer autoClose={1000} />
    </>
  )
}
