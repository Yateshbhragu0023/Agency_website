import React from 'react'

export default function Service() {

  const services = [
    {
      title: "Web Design",
      desc: "Creative and user-friendly designs that reflect your brand identity and engage your audience.",
      icon: "🎨",
    },
    {
      title: "Web Development",
      desc: "Scalable, secure, and fast websites built with ReactJS, NextJS, and NodeJS.",
      icon: "💻",
    },
    {
      title: "E-commerce Websites",
      desc: "Custom online stores with secure payment gateways and smooth shopping experiences.",
      icon: "🛒",
    },
    {
      title: "SEO  ",
      desc: "Improve rankings, boost website speed, and optimize content for better visibility.",
      icon: "🚀",
    },
    {
      title: "Landing Pages",
      desc: "High-converting landing pages designed to maximize leads and sales.",
      icon: "📈",
    },
    {
      title: "Website Optimization",
      desc: " Optimize your website anything and make your website high convertable  to maximize leads and sales.",
      icon: "📈",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#000000] via-[#0a0a2c] to-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We provide end-to-end solutions to help your business grow online with modern,
            powerful, and scalable web services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 rounded-2xl px-8 py-5 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-300">{service.desc}</p>
              <button
                className="mt-6 inline-flex items-center w-full justify-center px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition-colors group"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
