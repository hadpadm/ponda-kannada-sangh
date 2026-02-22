import React, { useState } from "react";
import { Mail, Phone, MapPin, Users } from "lucide-react";

const FORM_URL = "https://surveyheart.com/form/652bb98fb407c41259c6b75e";

const Contact: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center px-4 py-16">
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-3xl w-full text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h1>
          <p className="text-blue-700 mb-8">
            We’d love to hear from you! Reach out to us for event updates, membership, or cultural collaborations.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center">
              <Mail className="text-blue-600 w-8 h-8 mb-2" />
              <p className="font-semibold text-blue-800">Email</p>
              <p className="text-gray-600">pondakannadasangha@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="text-blue-600 w-8 h-8 mb-2" />
              <p className="font-semibold text-blue-800">Phone</p>
              <p className="text-gray-600">+91 9876543210</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="text-blue-600 w-8 h-8 mb-2" />
              <p className="font-semibold text-blue-800">Address</p>
              <p className="text-gray-600">Ponda, Goa, India</p>
            </div>
          </div>

          {/* Join Community Button */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              Come Join the Kannada Community!
            </h2>
            <p className="text-gray-700 mb-6">
              Become a member of Ponda Kannada Sangha and be part of our vibrant cultural family.
            </p>

            <button
              onClick={() => {
                setIframeLoaded(false);
                setShowForm(true);
              }}
              aria-haspopup="dialog"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              <Users className="mr-2" />
              Become a Member
            </button>

            <div className="mt-3">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-blue-600 hover:text-blue-800"
              >
                Or open the form in a new tab
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Membership form"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowForm(false)}
          />

          {/* Modal content */}
          <div className="relative w-[95%] md:w-[85%] lg:w-[70%] max-w-5xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h3 className="text-lg md:text-xl font-semibold text-blue-800">Membership Form</h3>
              <div className="flex items-center space-x-2">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline text-blue-600 hover:text-blue-800"
                >
                  Open in new tab
                </a>
                <button
                  onClick={() => setShowForm(false)}
                  aria-label="Close membership form"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-0 w-full h-[75vh] md:h-[80vh]">
              {/* Spinner while loading */}
              {!iframeLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="flex flex-col items-center space-y-2">
                    <svg
                      className="animate-spin w-12 h-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                      <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" className="opacity-75" />
                    </svg>
                    <span className="text-sm text-gray-600">Loading form…</span>
                  </div>
                </div>
              )}

              <iframe
                src={FORM_URL}
                title="SurveyHeart Membership Form"
                onLoad={() => setIframeLoaded(true)}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
