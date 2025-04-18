import React, { useState } from "react";
import LinkedInIcon from "../images/LinkedIn.png";
import EmailIcon from "../images/Email.png";

export default function HelpPage() {
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
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center p-6">
      <div className="w-full max-w-2xl space-y-6">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Help & Support
          </h1>
          <p className="text-gray-700">
            Need assistance? Review our policies or get in touch with our team.
          </p>
        </header>

        {showPrivacyPolicy ? (
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Privacy Policy
            </h2>
            <p className="text-gray-600 text-sm">
              We collect only the data needed to power your space‑travel experience:
              mission selections, booking details, and preferences. All information
              is stored securely and never shared without your consent.
            </p>
            <p className="text-gray-600 text-sm">
              By using Hadi Voyage, you agree to the terms of this policy. For
              questions, contact us below.
            </p>
            <button
              onClick={togglePrivacyPolicy}
              className="text-purple-600 hover:underline"
            >
              Close
            </button>
          </div>
        ) : showTermsOfService ? (
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Terms of Service
            </h2>
            <p className="text-gray-600 text-sm">
              Use of this platform is subject to applicable laws and these
              terms. You agree not to misuse the site or its data. We reserve
              the right to modify terms at any time.
            </p>
            <p className="text-gray-600 text-sm">
              Continued use after updates constitutes acceptance. Please reach
              out if you have any concerns.
            </p>
            <button
              onClick={toggleTermsOfService}
              className="text-purple-600 hover:underline"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={togglePrivacyPolicy}
              className="bg-purple-600 text-white py-2 px-6 rounded-full shadow hover:bg-purple-700 transition"
            >
              Privacy Policy
            </button>
            <button
              onClick={toggleTermsOfService}
              className="bg-gray-200 text-gray-700 py-2 px-6 rounded-full shadow hover:bg-gray-300 transition"
            >
              Terms of Service
            </button>
          </div>
        )}

        <footer className="mt-12 text-center space-y-4">
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/company/hadivoyage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img src={LinkedInIcon} alt="LinkedIn" className="h-6" />
            </a>
            <a
              href="mailto:8360720@gmail.com"
              className="hover:opacity-80 transition"
            >
              <img src={EmailIcon} alt="Email" className="h-6" />
            </a>
          </div>
          <p className="text-gray-500">© 2025 Hadi Voyage. All Rights Reserved.</p>
        </footer>
      </div>
    </section>
);
}
