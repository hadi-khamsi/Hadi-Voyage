import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-12">
      <div className="max-w-4xl text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Story
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          At Hadi Voyage, we are passionate about making space travel a reality
          for everyone. Inspired by our childhood dreams of exploring the
          cosmos, we recognized a crucial gap in accessible, centralized
          information for aspiring space travelers.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          As enthusiasts turned entrepreneurs, we embarked on a mission to
          create Hadi Voyage – your ultimate guide to space tourism. We provide
          comprehensive insights into the logistics, climate conditions, safety
          measures, and unparalleled experiences that await you beyond Earth's
          atmosphere.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Join us on this journey as we pioneer the future of space exploration
          and transform dreams into reality. Whether you're an adventurer,
          researcher, or simply curious about the cosmos, Hadi Voyage is your
          gateway to discovering the wonders of space.
        </p>
      </div>
      <div className="mt-4 text-gray-500">
        © 2024 Hadi Voyage. All rights reserved.
      </div>
    </div>
  );
};

export default AboutPage;
