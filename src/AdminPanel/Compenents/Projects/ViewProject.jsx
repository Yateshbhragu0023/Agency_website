import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../../../context/Context';
import { useEffect } from 'react';
import axios from 'axios';

export default function ViewProject() {

  const { API_BASE_URL, project_URL, FetchAllProjects, ToastNotify, Projects } = useContext(MainContext)

  const deleteHandler = (id) => {

    axios.delete(API_BASE_URL + project_URL + `/delete/${id}`).then(
      (succes)=>{
        ToastNotify(succes.data.msg, succes.data.status)
        FetchAllProjects()
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )
  }

  useEffect(
    () => {
      FetchAllProjects()
    }, []
  )


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-[90%] mx-auto">
        {/* Header with title + button */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center md:text-left">
            View Projects
          </h1>
          <Link to={'/admin/addproject'} >
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow font-medium transition">
              + Add Project
            </button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={API_BASE_URL + `/ProjectImages/${project.ImageName}`}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-lg font-medium text-[#AB854F]">
                ₹{project.price}
              </p>

              <div className="mt-4 flex justify-between gap-3">
                <button className="w-1/2 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                  View Project
                </button>
                <button onClick={() => deleteHandler(project._id)} className="w-1/2 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
