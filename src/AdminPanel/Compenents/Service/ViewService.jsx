import React from 'react'
import { Link } from 'react-router-dom';

export default function ViewService() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "We create responsive, modern, and user-friendly websites tailored for businesses.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "Boost your business with SEO, social media marketing, and paid campaigns.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Graphic Design",
      description: "We design logos, banners, and creatives that truly represent your brand identity.",
      image:
        "https://images.unsplash.com/photo-1581090700227-4c4f50b9d6c4?auto=format&fit=crop&w=600&q=80",
    },
  ];


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            View Services
          </h1>
          <Link to={'/admin/addservice'} >
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow font-medium transition">
              + add service
            </button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 text-sm mt-2 flex-grow">{service.description}</p>

              <div className="mt-4 flex justify-between gap-3">
                <button className="w-1/2 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                  View service
                </button>
                <button className="w-1/2 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition">
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
