import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewReview() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Customer Reviews</h1>
        <Link to={'/admin/addreview'}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition">
            Add Review
          </button>
        </Link>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Review Card */}
        <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="font-semibold text-gray-800">John Doe</h2>
              <p className="text-gray-500 text-sm">johndoe@email.com</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            "Great service and very professional team. I really liked how they
            handled my project."
          </p>
          <div className="flex items-center justify-between">
            <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
            <button className="text-red-500 hover:text-red-600 font-medium">
              Delete
            </button>
          </div>
        </div>

        {/* Another Review */}
        <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="font-semibold text-gray-800">Sarah Smith</h2>
              <p className="text-gray-500 text-sm">sarah@email.com</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            "Amazing experience! Highly recommend them for quality and timely
            work."
          </p>
          <div className="flex items-center justify-between">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <button className="text-red-500 hover:text-red-600 font-medium">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
