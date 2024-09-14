import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyWebsite</div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Menu Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Menu Links */}
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="lg:flex lg:space-x-4">
            <li className="text-white py-2 px-4 hover:bg-blue-700 rounded lg:bg-transparent">
              <a href="/">Home</a>
            </li>
            <li className="text-white py-2 px-4 hover:bg-blue-700 rounded lg:bg-transparent">
              <a href="/about">About</a>
            </li>
            <li className="text-white py-2 px-4 hover:bg-blue-700 rounded lg:bg-transparent">
              <a href="/services">Services</a>
            </li>
            <li className="text-white py-2 px-4 hover:bg-blue-700 rounded lg:bg-transparent">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
