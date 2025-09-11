import React from 'react'
import { FaArrowUp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {

  const menuItems = [
    {
      id: 1,
      name: "Home",
      to: "/"
    },
    {
      id: 1,
      name: "Services",
      to: "/services"
    },
    {
      id: 1,
      name: "Pricing",
      to: "/pricing"
    },
    {
      id: 1,
      name: "About Us",
      to: "/about"
    },
    {
      id: 1,
      name: "Contact Us",
      to: "/contact"
    }

  ];
  const Services = [
    {
      id: 1,
      name: "Website Development",
    },
    {
      id: 2,
      name: "App Development ",
    },
    {
      id: 3,
      name: "Website design",
    },
    {
      id: 4,
      name: "Social Media Marketing",
    },
    {
      id: 5,
      name: "SEO Optimization",

    },
    {
      id: 6,
      name: "Email Marketing",

    }

  ];


  return (
    <footer className="bg-gradient-to-b from-black  to-black rounded-2xl border border-blue-700 text-gray-300 py-10 px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <h1 className="text-[25px] font-bold flex items-center gap-2">
            <span className="text-blue-500 ">⧉</span > WEB TH
          </h1>
          <p className="text-[17px] mt-3">
            Driving Digital Growth with <br /> Innovation & Strategy
          </p>
          <p className="text-xs mt-4 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque luctus nec ullamcorper mattis pulvinar.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-white text-[20px] mb-3">Quick Links</h2>
          <ul className="space-y-2 text-[17px]">
            {
              menuItems.map(
                (menu, index) => {
                  return (
                    <Link to={menu.to} key={menu.index}>
                      <li><span className="hover:text-blue-400">{menu.name}</span></li>
                    </Link>
                  )
                }
              )
            }

          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-semibold text-white  text-[20px] mb-3">Services</h2>
          <ul className=" text-[16px] ">
            {
              Services.map(
                (service, data) => {
                  return (
                    <Link >
                      <li><span className="hover:text-blue-400 ">{service.name}</span></li>
                    </Link>
                  )
                }
              )
            }

          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-semibold text-white  text-[20px] mb-3">Contact Info</h2>
          <p className="text-[17px]">yatesh@WEBTHagency.com</p>
          <p className="text-[17px] mt-2">+91 9672427970</p>
          <p className="text-[17px] mt-2">123 Gulab Bagh, Dholpur,( raj.) India</p>

          {/* Social Media */}
          <h2 className="font-semibold text-white mt-5 mb-3">Social Media</h2>
          <div className="flex gap-3">
            <a href="facebook.com/profile.php?id=100068991917924&mibextid=ZbWKwL">
              <span className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                <FaFacebookF />
              </span>
            </a>
            <a href="www.youtube.com/@yateshtechhub">
              <span className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                <FaYoutube />
              </span>
            </a>
            <a href="instagram.com/theyatesh_bhragu?igsh=MTBoa3Zic2hleWkyYg==">
              <span className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                <FaInstagram />
              </span>
            </a>
            <a href="www.linkedin.com/in/yatesh-bhragu-41a923316">
              <span className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} WEB TH Agency. All rights reserved.
        <span className=' fixed bottom-10 right-10 w-10 h-10 bg-blue-600 rounded-xl text-xl text-white p-[10px] item-center '> <a href="#top"> <FaArrowUp /> </a> </span>
      </div>
    </footer>
  )
}
