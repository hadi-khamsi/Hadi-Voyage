import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm mb-4 md:mb-0">&copy; 2024 Hadi Voyage</div>
        <div className="text-sm flex flex-wrap">
          <Link to="/news" className="ml-4 mb-2 md:mb-0">
            Privacy Policy
          </Link>
          <Link to="/news" className="ml-4 mb-2 md:mb-0">
            Terms of Service
          </Link>
          <Link to="/reserve" className="ml-4 mb-2 md:mb-0">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
