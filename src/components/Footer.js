import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "../images/LinkedIn.png";
import EmailIcon from "../images/Email.png";
import MobileIcon from "../images/Mobile.png";
import AppleIcon from "../images/Apple.png";

const Footer = () => (
  <footer className="bg-black text-white py-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div className="text-sm">&copy; 2025 Hadi Voyage.</div>

      <div className="flex space-x-4">
        <a
          href="https://linkedin.com/company/hadivoyage"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img src={LinkedInIcon} alt="LinkedIn" className="h-6" />
        </a>
        <a href="mailto:8360720@gmail.com" className="hover:opacity-80">
          <img src={EmailIcon} alt="Email" className="h-6" />
        </a>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img src={MobileIcon} alt="Google Play" className="h-6" />
        </a>
        <a
          href="https://apps.apple.com/us"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img src={AppleIcon} alt="App Store" className="h-6" />
        </a>
      </div>

      <div className="flex space-x-6 text-sm">
        <Link to="/news" className="hover:underline">
          Privacy Policy
        </Link>
        <Link to="/news" className="hover:underline">
          Terms of Service
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
