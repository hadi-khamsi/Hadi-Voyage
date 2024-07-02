import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "../images/LinkedIn.png";
import EmailIcon from "../images/Email.png";
import MobileIcon from "../images/Mobile.png";
import AppleIcon from "../images/Apple.png";
import NewsImage from "../images/Sample.avif";
import LaunchImage from "../images/Launch.jpeg";

const HomePage = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen overflow-y-auto bg-black">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${NewsImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto text-white px-4 pb-16">
            <p className="text-xl font-semibold mb-2 text-white">Latest News</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide text-white">
              EOS-X Space Announces First Tourist Flights to the Edge of Space
              for 2025
            </h1>
            <a
              href="https://www.autoevolution.com/news/eos-x-space-announces-first-tourist-flights-to-the-edge-of-space-for-2025-235907.html"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white py-3 px-8 transition duration-300 ease-in-out inline-block mb-4 hover:bg-white hover:text-black"
            >
              Read More
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white animate-bounce cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handleScroll}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="py-12 max-w-4xl mx-auto text-center text-gray-900">
        <div className="px-4 bg-black bg-opacity-80 text-white rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Hadi Voyage™</h2>
          <p className="text-lg mb-8">
            Embark on an extraordinary journey with Hadi Voyage, leading the way
            in space tourism innovation. Discover unparalleled experiences,
            breathtaking destinations, and the excitement of space exploration.
          </p>
          <Link
            to="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out inline-block mb-4"
          >
            Learn More
          </Link>
          <Link
            to="/aircrafts"
            className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out inline-block mb-4 ml-4"
          >
            See Aircrafts
          </Link>
        </div>
      </div>

      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${LaunchImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto text-white px-4 pb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide text-white">
              Hadi Voyage Enters Pre-Launch Phase in July 2024
            </h2>
            <a
              href="https://linkedin.com/company/hadivoyage"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white py-3 px-8 transition duration-300 ease-in-out inline-block mb-4 hover:bg-white hover:text-black"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="py-4 bg-black">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://linkedin.com/company/hadivoyage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <img src={LinkedInIcon} alt="LinkedIn" className="h-8" />
            </a>
            <a
              href="mailto:8360720@gmail.com"
              className="text-white hover:text-blue-600"
            >
              <img src={EmailIcon} alt="Email" className="h-8" />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <img
                src={MobileIcon}
                alt="Get it on Google Play"
                className="h-8"
              />
            </a>
            <a
              href="https://apps.apple.com/us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <img src={AppleIcon} alt="Get it on App Store" className="h-8" />
            </a>
          </div>
          <div className="mt-4 text-center text-gray-500">
            <span className="text-gray-400">© 2024</span> Hadi Voyage. All
            rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
