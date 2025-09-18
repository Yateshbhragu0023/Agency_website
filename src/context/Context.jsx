import { useState } from 'react'
import { createContext } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

export const MainContext = createContext()
export default function Context({ children }) {

  const [Projects, setProjects] = useState([])
  const API_BASE_URL = "http://localhost:5001"
  const project_URL = "/project"
  const ToastNotify = (msg, status) => toast(msg, { type: status == true ? 'success' : 'error' })

  const FetchAllProjects = () => {
    axios.get("http://localhost:5001" + "/project").then(
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
