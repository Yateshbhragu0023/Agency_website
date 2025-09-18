import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../../context/Context'
import axios from 'axios'

export default function AddProject() {

  const { API_BASE_URL, project_URL, FetchAllProjects, ToastNotify, Projects, setProjects } = useContext(MainContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append("title", e.target.Projectname.value)
    formdata.append( "price", e.target.ProjectPrice.value)
    formdata.append("ProjectLink", e.target.ProjectLink.value)
    formdata.append("ImageName", e.target.ProjectImageName.files[0])
    
    axios.post(API_BASE_URL + project_URL + "/add", formdata).then(
      (succes) => {
        ToastNotify(succes.data.msg, succes.data.status)
        if(succes.data.status == 1){
          e.target.reset()
        }
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-[90%] mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* Header with button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Add Project</h1>
          <Link to={'/admin/project'}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow font-medium transition">
              View Projects
            </button>
          </Link>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Project Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Project Name</label>
            <input
              type="text"
              name='Projectname'
              placeholder="Enter project name"
              className="px-4 py-2 border bg-white rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Price</label>
            <input
              type="number"
              name='ProjectPrice'
              placeholder="Enter project price"
              className="px-4 py-2 border rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-1">Project Image</label>
            <input
              type="file"
              name='ProjectImageName'
              className="px-4 py-2 border rounded-lg bg-gray-50 text-black file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-1">Project Link</label>
             <input
              type="url"
              name='ProjectLink'
              placeholder='https://www.linkedin.com/in/yatesh-bhragu-41a923316/'
              className="px-4 py-2 border rounded-lg bg-gray-50 text-black file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
            
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4">
            <button
              type="reset"
              onReset={(e) => e.target.reset()}
              className="px-6 py-2 border border-gray-400 rounded-lg  text-gray-600 hover:bg-gray-100 transition"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
