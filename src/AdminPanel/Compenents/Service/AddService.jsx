import React from 'react'
import { Link } from 'react-router-dom'

export default function AddService() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-[90%] mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* Header with button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Add Service</h1>
          <Link to={'/admin/service'}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow font-medium transition">
              View Services
            </button>
          </Link>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Title */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-1">Service Title</label>
            <input
              type="text"
              placeholder="Enter service title"
              className="px-4 py-2 border bg-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Service Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-1">Description</label>
            <textarea
              rows="4"
              placeholder="Enter service description"
              className="px-4 py-2 border bg-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-1">Service Image</label>
            <input
              type="file"
              className="px-4 py-2 border rounded-lg bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4">
            <button
              type="reset"
              className="px-6 py-2 border border-gray-400 rounded-lg text-gray-600 hover:bg-gray-100 transition"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
