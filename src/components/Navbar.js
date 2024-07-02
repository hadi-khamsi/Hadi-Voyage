import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img
              src={Logo}
              alt="Hadi Voyage Logo"
              className="h-12 md:h-16 mr-2"
              style={{ maxWidth: "150px" }}
            />
          </Link>
          <Link
            to="/news"
            className="text-gray-400 text-xs md:text-sm ml-5 hover:text-blue-500"
            onClick={closeMenu}
          >
            BETA Phase
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
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
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}
        >
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 md:ml-4 md:text-lg hover:text-blue-500"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/aircrafts"
            className="block mt-4 md:inline-block md:mt-0 md:ml-4 md:text-lg hover:text-blue-500"
            onClick={closeMenu}
          >
            Aircrafts
          </Link>
          <Link
            to="/launches"
            className="block mt-4 md:inline-block md:mt-0 md:ml-4 md:text-lg hover:text-blue-500"
            onClick={closeMenu}
          >
            Schedule
          </Link>
          <Link
            to="/reserve"
            className="block mt-4 md:inline-block md:mt-0 md:ml-4 md:text-lg hover:text-blue-500"
            onClick={closeMenu}
          >
            Reserve
          </Link>
          <Link
            to="/risks"
            className="block mt-4 md:inline-block md:mt-0 md:ml-4 md:text-lg hover:text-blue-500"
            onClick={closeMenu}
          >
            Risks
          </Link>
          <Link
            to="/weather"
            className="block mt-4 md:inline-block md:mt-0 md:ml-4 md:text-lg hover:text-blue-500"
            onClick={closeMenu}
          >
            Weather
          </Link>
          <Link
            to="/about"
            className="block mt-4 md:inline-block md:mt-0 md:ml-4 md:text-lg hover:text-blue-500"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/news"
            className="block mt-4 md:inline-block md:mt-0 md:ml-4 md:text-lg hover:text-blue-500"
            onClick={closeMenu}
          >
            BETA
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
