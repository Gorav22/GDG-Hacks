import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16" id="contact-section">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Get in touch with us for any questions or support
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 duration-300 animate-fade-in-up">
            <div className="flex items-center justify-center">
              <i className="fas fa-envelope text-3xl text-custom"></i>
            </div>
            <h3 className="mt-4 text-lg font-medium text-center text-gray-900">Email Us</h3>
            <p className="mt-2 text-center text-gray-500">support@lithub.com</p>
          </div>
          {/* Add more contact options here */}
        </div>
      </div>
    </div>
  );
};

export default Contact;