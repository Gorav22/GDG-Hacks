import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <div className="relative z-20 pb-8 bg-white/90 backdrop-blur-sm sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-1/2 lg:pb-28 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block animate-fade-in-down">Your AI-Powered</span>
                <span className="block text-custom animate-fade-in-up delay-300">
                  Digital Library
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in delay-500">
                Transform your reading experience with AI-powered insights, personalized
                recommendations, and seamless library management across all your devices.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-fade-in-up delay-700">
                <div className="rounded-md shadow">
                  <button className="!rounded-button w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-custom hover:bg-custom/90 md:py-4 md:text-lg md:px-10">
                    Get Started
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="!rounded-button w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-custom bg-custom/10 hover:bg-custom/20 md:py-4 md:text-lg md:px-10">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;