import React, { useState } from "react";
import LinkedInIcon from "../images/LinkedIn.png";
import EmailIcon from "../images/Email.png";

const NewsPage = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
    setShowTermsOfService(false);
  };

  const toggleTermsOfService = () => {
    setShowTermsOfService(!showTermsOfService);
    setShowPrivacyPolicy(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Latest Space Travel News
        </h1>
        <p className="text-lg text-center mb-6">
          Stay updated with the latest news in space travel and tourism.
        </p>

        <div className="text-lg">
          <p className="mb-4">
            Hadi Voyage is currently in its development phase, where our team of
            engineers and experts is diligently working to elevate your website
            experience. We are focused on expanding our capabilities in agent
            connectivity, ensuring seamless interactions and comprehensive
            service offerings. Our commitment extends to pioneering innovations
            in space travel, aiming to redefine the future of cosmic exploration
            and make the childhood dream of flying to space a reality.
          </p>
          <p>
            If you are interested in partnering with us, please reach out to
            discuss potential collaborations. For more information, visit our{" "}
            <a
              href="https://linkedin.com/in/hadivoyage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn profile
            </a>{" "}
            or contact us via email at{" "}
            <a
              href="mailto:8360720@gmail.com"
              className="text-blue-500 hover:underline"
            >
              8360720@gmail.com
            </a>
            .
          </p>
        </div>

        {showPrivacyPolicy && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-2">Privacy Policy</h2>
            <p className="text-sm mb-4">
              At Hadi Voyage, we are committed to protecting your privacy. This
              Privacy Policy outlines how we collect, use, disclose, and
              safeguard your information when you visit our website.
            </p>
            <p className="text-sm mb-4">
              We may collect personal information such as your name, email
              address, and browsing behavior to improve our services and provide
              you with a personalized experience.
            </p>
            <p className="text-sm mb-4">
              By using our website, you consent to the collection and use of
              your information as described in this Privacy Policy. If you have
              any questions or concerns about our Privacy Policy, please contact
              us.
            </p>
            <button
              className="text-blue-500 hover:underline"
              onClick={togglePrivacyPolicy}
            >
              Close Privacy Policy
            </button>
          </div>
        )}

        {showTermsOfService && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-2">Terms of Service</h2>
            <p className="text-sm mb-4">
              Welcome to Hadi Voyage! These Terms of Service govern your use of
              our website. By accessing or using our website, you agree to abide
              by these Terms of Service and to comply with all applicable laws
              and regulations.
            </p>
            <p className="text-sm mb-4">
              You agree not to reproduce, duplicate, copy, sell, resell, or
              exploit any portion of the website without express written
              permission from us.
            </p>
            <p className="text-sm mb-4">
              We reserve the right to modify these Terms of Service at any time.
              Please review these Terms of Service periodically for changes.
              Your continued use of our website constitutes acceptance of these
              changes.
            </p>
            <button
              className="text-blue-500 hover:underline"
              onClick={toggleTermsOfService}
            >
              Close Terms of Service
            </button>
          </div>
        )}

        <div className="flex justify-center mt-6 space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
            onClick={togglePrivacyPolicy}
          >
            Privacy Policy
          </button>
          <button
            className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
            onClick={toggleTermsOfService}
          >
            Terms of Service
          </button>
        </div>
      </div>

      <div className="mt-auto text-center py-4">
        <div className="flex justify-center items-center">
          <a
            href="https://linkedin.com/company/hadivoyage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 mx-4"
          >
            <img src={LinkedInIcon} alt="LinkedIn" className="h-6" />
          </a>
          <a
            href="mailto:8360720@gmail.com"
            className="text-blue-500 hover:text-blue-600 mx-4"
          >
            <img src={EmailIcon} alt="Email" className="h-6" />
          </a>
        </div>
        <div className="mt-4 text-gray-500">
          Connect With Us
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
