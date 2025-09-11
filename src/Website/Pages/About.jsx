import React  from 'react'
import PI from "../../assets/Img/profilelogo.jpeg"


export default function About() {

  const team = [
    {
      name: "Yatesh Bhragu",
      role: "Founder & Web Developer",
      img: PI, // replace with real images
    },
    {
      name: "CH Rohit",
      role: "UI/UX Designer",
      img: PI,
    },
    {
      name: "Neha Patel",
      role: "SEO & Marketing Specialist",
      img: PI,
    },
  ];


  return (
    <section className="bg-gradient-to-b from-black via-[#0c0c2c] to-black text-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">About Our Agency</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We are a passionate web agency focused on building modern, scalable, and impactful digital
          solutions for businesses. From stunning designs to powerful web apps, our mission is to help 
          brands grow online.
        </p>
      </div>

      {/* Mission, Vision, Values */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 py-16">
        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold mb-4">🚀 Our Mission</h3>
          <p className="text-gray-300">
            Deliver high-quality, modern web solutions that empower businesses to achieve their goals.
          </p>
        </div>
        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold mb-4">🌎 Our Vision</h3>
          <p className="text-gray-300">
            To become India’s top web development agency, helping brands scale globally through digital innovation.
          </p>
        </div>
        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold mb-4">💡 Our Values</h3>
          <p className="text-gray-300">
            Creativity, transparency, and customer-first approach guide everything we do.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-500"
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Something Great Together 🚀
        </h2>
        <p className="text-gray-300 mb-8">
          Ready to bring your vision online? Contact us today and let’s create a powerful digital
          presence for your business.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
