import React from 'react'

export default function Pricing() {
  return (

    <section className="relative py-20 my-4 bg-gradient-to-b from-[#000000] via-[#0a0731] to-[#000000] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Our Pricing Plans</h2>
        <p className="text-gray-300 mb-12">
          Choose the right plan for your website development needs.
        </p>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Basic Plan */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 hover:scale-105 transition transform">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-gray-300 mb-6">Perfect for small businesses & personal sites.</p>
            <h4 className="text-4xl font-bold mb-6">₹9,999</h4>
            <ul className="text-left space-y-3 mb-8">
              <li>✅ 3 Pages Website</li>
              <li>✅ Mobile Responsive</li>
              <li>✅ Basic SEO Setup</li>
              <li>✅ 1 Month Support</li>
              <li>❌ Unlimited Revisions</li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-white/20 border  border-blue-500 rounded-2xl p-8 hover:scale-105 transition transform shadow-lg shadow-blue-500/30">
            {/* Tilted Badge */}
            <div className="absolute top-6 -right-0 w-20 bg-blue-600 text-white text-sm font-semibold py-1 text-center transform rotate-45 shadow-md">
              ⭐ Popular
            </div>
            <h3 className="text-2xl font-semibold mb-4">Standard</h3>
            <p className="text-gray-300 mb-6">Best for growing startups & businesses.</p>
            <h4 className="text-4xl font-bold mb-6">₹19,999</h4>
            <ul className="text-left space-y-3 mb-8">
              <li>✅ 10 Pages Website</li>
              <li>✅ Advanced Responsive Design</li>
              <li>✅ On-Page SEO Optimization</li>
              <li>✅ 6 Months Support</li>
              <li>✅ Unlimited Revisions</li>

            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 hover:scale-105 transition transform">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-gray-300 mb-6">Complete solution for enterprises.</p>
            <h4 className="text-4xl font-bold mb-6">₹39,999</h4>
            <ul className="text-left space-y-3 mb-8">
              <li>✅ Unlimited Pages</li>
              <li>✅ Custom Features & Integrations</li>
              <li>✅ Full SEO & Analytics Setup</li>
              <li>✅ 12 Months Support</li>
              <li>✅ Unlimited Revisions</li>

            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
