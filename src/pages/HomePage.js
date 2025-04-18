import React from "react";
import { Link } from "react-router-dom";
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
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${NewsImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto text-white px-4 pb-16">
            <p className="text-xl font-semibold mb-2">Latest News</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
              EOS‑X Space Announces First Tourist Flights to the Edge of Space for 2025
            </h1>
            <a
              href="https://www.autoevolution.com/news/eos-x-space-announces-first-tourist-flights-to-the-edge-of-space-for-2025-235907.html"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white py-3 px-8 inline-block mb-4 transition hover:bg-white hover:text-black"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Intro & Actions */}
      <div className="py-12 max-w-4xl mx-auto text-center">
        <div className="px-4 bg-black bg-opacity-80 text-white rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Hadi Voyage™</h2>
          <p className="text-lg mb-8">
            Hadi Voyage™ democratizes space tourism. Book pioneering spacecraft, plan missions, and explore orbital destinations with unmatched insight.
          </p>
          <Link
            to="/reserve"
            className="bg-white text-black py-3 px-8 rounded-md shadow-md inline-block mb-4 transition hover:bg-gray-100"
          >
            Book Now
          </Link>
          <Link
            to="/spacecrafts"
            className="border border-white text-white py-3 px-8 rounded-md shadow-md inline-block mb-4 ml-4 transition hover:bg-white hover:text-black"
          >
            See Spacecrafts
          </Link>
        </div>
      </div>

      {/* Pre‑launch Callout */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${LaunchImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto text-white px-4 pb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
              Hadi Voyage Enters Pre‑Launch Phase in May 2025
            </h2>
            <a
              href="https://linkedin.com/company/hadivoyage"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white py-3 px-8 inline-block mb-4 transition hover:bg-white hover:text-black"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
