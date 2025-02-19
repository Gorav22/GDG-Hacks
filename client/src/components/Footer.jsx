import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Add footer links here */}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 LitHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;