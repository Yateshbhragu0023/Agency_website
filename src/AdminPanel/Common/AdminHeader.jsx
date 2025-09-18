import React, { useState } from 'react'
import Pimage from "../../assets/Img/profilelogo.jpeg"

export default function AdminHeader() {

  const [showSidebar, setShowsidebar] = useState(false)

  return (
    <header className="w-full bg-gradient-to-br from-blue-700 to-black/90 shadow-sm px-6 rounded-lg text-white py-4 flex justify-between items-center">
      {/* Title / Page Name */}
      <h2 className="text-xl font-semibold "> Welcome Mr. <span className='text-yellow-400'>yatesh</span> in Affliate Dashboard</h2>

      {/* Right Side: Search + Notifications + Profile */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1.5 rounded-md border text-black border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />

        {/* Notification Bell */}
        <button className="relative text-black hover:text-blue-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Admin Profile */}
        <button onClick={() => setShowsidebar(!showSidebar)} className="px-5 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-all shadow-lg transform hover:scale-105">
          Profile
        </button>
        {
          showSidebar
            ?
            <div className="absolute right-5 top-16 bg-blue-600 text-gray-900 shadow-lg rounded-lg w-56 p-4 border border-gray-300">
              <div className="flex items-center space-x-3">
                <img
                src={Pimage}
                  alt="User"
                  className="w-12 h-12 rounded-full border border-gray-300"
                />
                <div>
                  <h3 className="text-lg font-semibold">Yatesh Bhragu</h3>
                  <p className="text-sm text-white">Admin & Developer</p>
                </div>
              </div>

              {/* Logout Button */}
              <button
                className="mt-7 w-full py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all"
              >
                Logout
              </button>
            </div>
            :
            ""
        }


      </div>
    </header>
  )
}
