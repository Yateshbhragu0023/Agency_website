import React from 'react'
import { Link } from 'react-router-dom'

export default function AddTeam() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Add Project</h1>
          <Link to={'/admin/team'}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow font-medium transition">
              View team
            </button>
          </Link>
        </div>
        {/* Form */}
        <form className="space-y-5">
          {/* Profile Image */}
          <div>
            <label className="block text-gray-700  font-medium mb-1">
              Profile Image
            </label>
            <input
              type="file"
              className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:outline-blue-500"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:outline-blue-500"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Role / Designation
            </label>
            <input
              type="text"
              placeholder="e.g. Frontend Developer"
              className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:outline-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:outline-blue-500"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              LinkedIn Profile (optional)
            </label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/username"
              className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:outline-blue-500"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow font-medium transition"
            >
              Add Member
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
