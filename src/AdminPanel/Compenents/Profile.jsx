import React from 'react'
import Pimage from "../../assets/Img/profilelogo.jpeg"

export default function Profile() {
  return (
     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            src={Pimage}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
          />
          <h1 className="text-2xl font-bold text-gray-800 mt-4">Yatesh bHragu</h1>
          <p className="text-gray-500">Admin | Web Development Agency</p>
        </div>

        {/* Profile Info */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-sm text-gray-500">Full Name</h2>
            <p className="text-lg font-medium text-gray-800">Yatesh bHragu</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-sm text-gray-500">Email</h2>
            <p className="text-lg font-medium text-gray-800">
              webTh@agency.com
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-sm text-gray-500">Phone</h2>
            <p className="text-lg font-medium text-gray-800">+91 9672427970</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-sm text-gray-500">City</h2>
            <p className="text-lg font-medium text-gray-800">Dholpur</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-sm text-gray-500">Age</h2>
            <p className="text-lg font-medium text-gray-800">20</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-sm text-gray-500">Role</h2>
            <p className="text-lg font-medium text-gray-800">Super Admin</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Edit Profile
          </button>
          <button className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
