import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';


export default function AdminSidebar() {

  const navItems = [
    { name: "Project", icon: MdDashboard, link: "project" },
    { name: "Reviews", icon: IoIosStar, link: 'review' },
    { name: "services", icon: CgProfile, link: 'service' },
    { name: "Team", icon: FaUser, link: 'team' },
    { name: "Profile", icon: CgProfile, link: 'profile' },

  ];


  return (
    <div className="h-screen w-64 bg-gradient-to-b from-blue-700 to-black rounded-xl text-white flex flex-col justify-between shadow-lg">
      {/* Logo */}
      <div className="px-6 py-6 text-2xl font-bold tracking-wide">
        <span className="text-white">Admin</span>
        <span className="text-blue-300">Panel</span>
      </div>

      {/* Navigation */}
      <ul className="flex-1 mt-4 px-4 ">
        {navItems.map((item, index) => (
          <Link to={item.link} key={index}>
            <li
              className="flex items-center gap-3 px-4 py-2 my-4 rounded-lg bg-blue-700 hover:bg-blue-900 transition-all duration-200 font-medium"
            >
              <item.icon />
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      {/* Logout */}
      <div className="px-4 py-6">
        <button className="w-full text-black flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition font-medium">
          <IoLogOut />
          Logout
        </button>
      </div>
    </div>
  )
}
