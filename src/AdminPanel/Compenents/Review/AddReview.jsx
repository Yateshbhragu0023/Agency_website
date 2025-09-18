import React from 'react'
import { Link } from 'react-router-dom'

export default function AddReview() {
  return (
     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Add New Review</h1>
          <Link to={"/admin/review"}>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              View Reviews
            </button>
          </Link>
        </div>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter customer's name"
              className="w-full border rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter customer's email"
              className="w-full border rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <select className="w-full border rounded-lg px-4 bg-white py-2 focus:ring-2 focus:ring-blue-400 outline-none">
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
              <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
              <option value="3">⭐⭐⭐ (3 Stars)</option>
              <option value="2">⭐⭐ (2 Stars)</option>
              <option value="1">⭐ (1 Star)</option>
            </select>
          </div>

          {/* Review Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Review
            </label>
            <textarea
              rows="4"
              placeholder="Write customer's review..."
              className="w-full border rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
          >
            Add Review
          </button>
        </form>
      </div>
    </div>
  )
}
