import React from 'react'

export default function Contact() {
  return (

    <section className="relative py-20 bg-gradient-to-b from-[#000000] via-[#070725] to-[#000000] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Your Project</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Share your project details with us, and we’ll help you build a website
            that grows your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              {/* Basic Info */}
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
               <div>
                <label className="block text-sm font-semibold mb-2">Contact No. </label>
                <input
                  type="tel"
                  placeholder=""
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-semibold mb-2">Project Type</label>
                <select
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option className='text-black' value="">Select Project Type</option>
                  <option className='text-black' value="portfolio">Portfolio Website</option>
                  <option className='text-black' value="business">Business Website</option>
                  <option className='text-black' value="ecommerce">E-commerce Store</option>
                  <option className='text-black' value="custom">Custom Web App</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold mb-2">Estimated Budget</label>
                <select
                  className="w-full p-3  rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option className='text-black' value="">Select Budget</option>
                  <option className='text-black' value="under50k">Under ₹50,000</option>
                  <option className='text-black' value="50k-1lakh">₹50,000 - ₹1,00,000</option>
                  <option className='text-black' value="1lakh-5lakh">₹1,00,000 - ₹5,00,000</option>
                  <option className='text-black' value="5lakh+">₹5,00,000+</option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-semibold mb-2">Timeline</label>
                <select
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option className='text-black' value="">Select Timeline</option>
                  <option className='text-black' value="1month">Within 1 Month</option>
                  <option className='text-black' value="1-3months">1 - 3 Months</option>
                  <option className='text-black' value="3-6months">3 - 6 Months</option>
                  <option className='text-black' value="flexible">Flexible</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2">Project Details</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-lg font-semibold shadow-lg"
              >
                Submit Project Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-white/10 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">📍 Address</h3>
              <p className="text-gray-300">Dholpur, Rajasthan <br /> India</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">📞 Phone</h3>
              <p className="text-gray-300">+91 9672407970</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">✉️ Email</h3>
              <p className="text-gray-300">support@webTHagency.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
