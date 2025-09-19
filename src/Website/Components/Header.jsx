import React, { useState } from 'react'
import { Menu, X, Phone } from "lucide-react";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: "Home",
      to: ""
    },
    {
      id: 2,
      name: "About",
      to: "/about"
    },
    {
      id: 3,
      name: "Services",
      to: "/services"
    },
    {
      id: 4,
      name: "Pricing",
      to: "/pricing"
    },
    {
      id: 5,
      name: "Contact Us",
      to: "/contact"
    }

  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`w-full bg-black text-white shadow-md sticky top-0 z-[999] border border-blue-700 rounded-2xl p-2 mt-4 transition-all duration-300 ${isScrolled ? "py-2 px-4 top-5" : "py-4 px-6"}`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rotate-45 rounded-sm"></div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">WEB TH </span>
            <span className="text-xs text-gray-400">Website Development Agency</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-[17px] font-medium">
          {menuItems.map((item, i) => (
            <Link to={item.to}  key={i}>
              <span
               
                className="relative text-gray-300 hover:text-blue-400 transition">
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Phone Button */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-blue-600  text-white px-4 py-2 rounded-full shadowB shadow-lg hover: transition">
            <Phone size={18} />
            <a href="https://wa.me/9672427970?text=Hi,%20Mr.%20yatesh%20i%20want%20a%20website%20for%20my%20business" target="_blank">
              <span className="font-semibold">Chat With Us</span>
            </a>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-purple-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4 text-center">
          {menuItems.map((item, i) => (
            <Link to={item.to}>
              <span
                key={i}
                className="block text-gray-300  hover:text-blue-400 transition"
              >
                {item.name}
              </span>
            </Link>
          ))}
          <button className="w-full flex items-center justify-center space-x-2 bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition">
            <Phone size={18} />
            <a href="https://wa.me/9672427970?text=Hi,%20Mr.%20yatesh%20i%20want%20a%20website%20for%20my%20business">
              <span className="font-semibold">Chat With Us</span>
            </a>
          </button>
        </div>
      )}
    </header>
  )
}
