// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll"; // Smooth scrolling
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/NEYAM.png";
import { Link as RouterLink } from "react-router-dom";

const Navbar=() =>{
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", link: "home" },
    { name: "Gallery", link: "gallery" },
    { name: "Contacts", link: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 font-josefin">
      {/* Import Josefin Sans */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap');
          .font-josefin {
            font-family: 'Josefin Sans', sans-serif;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo only */}
          <a
            href="https://neyampuducherry.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img src={logo} alt="Neyam Logo" className="h-10 w-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                smooth={true}
                duration={500}
                offset={-64}
                className="cursor-pointer text-[#16182F] font-semibold hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button (logo navy blue) */}
            {/* Desktop Join Button */}
            <RouterLink
              to="/join"
              className="bg-[#0A1944] text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-[#142c6a] transition"
            >
              Join Now
            </RouterLink>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg font-josefin">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                smooth={true}
                duration={500}
                offset={-64}
                className="block px-3 py-2 rounded-md text-[#16182F] font-semibold hover:bg-blue-50 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button in Mobile (logo navy blue) */}
            <Link
              to="join"
              smooth={true}
              duration={500}
              offset={-64}
              className="block w-full text-center bg-[#0A1944] text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-[#142c6a] transition cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar
