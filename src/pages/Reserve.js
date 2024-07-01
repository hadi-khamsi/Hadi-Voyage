import React from "react";
import LinkedInIcon from "../images/LinkedIn.png";
import EmailIcon from "../images/Email.png";

const Reserve = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "We are experiencing higher than normal contact requests. Your request may take some time. If it's urgent, please get in touch with a Hadi Voyage representative."
    );
  };

  return (
    <div className="min-h-screen overflow-y-auto bg-white">
      <div className="py-12 max-w-4xl mx-auto text-center text-gray-900">
        <div className="px-4">
          <h1 className="text-4xl md:text-4.5xl font-bold mb-4">
            Reserve Your Commercial Spacecraft Flight
          </h1>
          <p className="text-lg mb-8">
            Discover the future of travel with Hadi Voyage. Reserve your seat on
            upcoming commercial spacecraft flights designed to explore the
            cosmos. Our flights operate in accordance with international space
            laws and are currently pending final regulatory approvals. We are in
            constant communication with our vendors and partners to ensure the
            best possible experience for our passengers.
          </p>
          <p className="text-lg mb-8">
            We are aiming to launch our first flights later this year. Stay
            tuned for more updates on our progress.
          </p>
        </div>
      </div>

      <div className="py-12 bg-gray-100">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Contact an Agent
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap -mx-3 mb-6 bg-white bg-opacity-75 rounded-lg p-4 shadow-md">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="firstName"
                  className="block text-gray-800 text-sm font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  htmlFor="lastName"
                  className="block text-gray-800 text-sm font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full px-3">
                <label
                  htmlFor="email"
                  className="block text-gray-800 text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full px-3">
                <label
                  htmlFor="message"
                  className="block text-gray-800 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  required
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
