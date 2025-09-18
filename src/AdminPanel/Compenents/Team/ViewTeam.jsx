import { Eye, Trash2 } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function ViewTeam() {

  const teamData = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Frontend Developer",
      email: "rahul.sharma@example.com",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 2,
      name: "Priya Verma",
      role: "UI/UX Designer",
      email: "priya.verma@example.com",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 3,
      name: "Amit Singh",
      role: "Backend Developer",
      email: "amit.singh@example.com",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-[95%] mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* Header with Add Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Team Members</h1>
          <Link to={'/admin/addteam'}> 
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow font-medium transition">
              Add Team Member
            </button>
          </Link>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col items-center text-center"
            >
              {/* Profile Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-600 mb-3"
              />

              {/* Member Info */}
              <h2 className="text-lg font-bold text-gray-800">{member.name}</h2>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="text-sm text-gray-500 mt-1">{member.email}</p>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg text-sm transition">
                  <Eye size={16} /> View
                </button>
                <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-sm transition">
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
