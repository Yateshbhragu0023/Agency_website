import React from 'react'
import { FaArrowUp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaSquareWhatsapp } from 'react-icons/fa6';
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
         <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rotate-45 rounded-sm"></div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">WEB TH </span>
            <span className="text-xs text-gray-400">Website Development Agency</span>
          </div>
        </div>
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
                    <Link to={menu.to} key={menu.id}>
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
                    <Link key={service.id} >
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

            <span className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
              <a href="https://facebook.com/profile.php?id=100068991917924&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </span>


            <span className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
              <a href="https://www.youtube.com/@yateshtechhub" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </span>


            <span className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
              <a href="https://www.instagram.com/yatesh.techhub/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </span>

            <span className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
              <a href="https://www.linkedin.com/in/yatesh-bhragu-41a923316/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </span>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" relative border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} WEB TH Agency. All rights reserved.
        <span className=' z-[999] fixed bottom-10 right-10 w-10 h-10 bg-blue-600 rounded-xl text-xl text-white p-[10px] item-center '> <a href="#top"> <FaArrowUp /> </a> </span>

      </div>
    </footer>
  )
}
