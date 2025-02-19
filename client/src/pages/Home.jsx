import React from 'react'

function Home() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LitHub - Your AI-Powered Digital Library</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        ".animate-fade-in-down{animation:fadeInDown 1s ease-out}.animate-fade-in-up{animation:fadeInUp 1s ease-out}.animate-fade-in{animation:fadeIn 1s ease-out}.animate-float{animation:float 3s ease-in-out infinite}@keyframes fadeInDown{0%{opacity:0;transform:translateY(-20px)}100%{opacity:1;transform:translateY(0)}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}.delay-300{animation-delay:300ms}.delay-500{animation-delay:500ms}.delay-700{animation-delay:700ms} .hover\\:scale-105:hover{transform:scale(1.05)} .transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:300ms}@keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-100%)}} .animate-scroll{animation:scroll 20s linear infinite}@keyframes rotateCards{0%{transform:translateX(0) rotateY(0)}25%{transform:translateX(-25%) rotateY(10deg)}50%{transform:translateX(-50%) rotateY(0)}75%{transform:translateX(-75%) rotateY(-10deg)}100%{transform:translateX(-100%) rotateY(0)}} .animate-rotate-cards{animation:rotateCards 20s linear infinite} .card-perspective{transform-style:preserve-3d;perspective:1000px} .book-card{cursor:pointer;transition:transform 0.6s;transform-style:preserve-3d;position:relative}.book-card.flipped{transform:rotateY(180deg)}.book-card-front,.book-card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden}.book-card-back{transform:rotateY(180deg);background:white}"
    }}
  />
  <nav className="bg-white border-b border-gray-200">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              alt="LitHub"
            />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="#"
              className="border-custom text-custom border-b-2 inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Library
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Community
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <button className="!rounded-button bg-custom text-white px-4 py-2 text-sm font-medium hover:bg-custom/90">
            Sign In
          </button>
        </div>
      </div>
    </div>
  </nav>
  <main>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <div className="relative z-20 pb-8 bg-white/90 backdrop-blur-sm sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-1/2 lg:pb-28 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block animate-fade-in-down">
                  Your AI-Powered
                </span>
                <span className="block text-custom animate-fade-in-up delay-300">
                  Digital Library
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in delay-500">
                Transform your reading experience with AI-powered insights,
                personalized recommendations, and seamless library management
                across all your devices.
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
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 relative flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 grid grid-cols-4 gap-2 opacity-10 pointer-events-none"
          style={{ zIndex: -1 }}
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-custom/20 rounded" />
            <div className="bg-custom/20 rounded" />
            <div className="bg-custom/20 rounded" />
            <div className="bg-custom/20 rounded" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-custom/20 rounded" />
            <div className="bg-custom/20 rounded" />
            <div className="bg-custom/20 rounded" />
            <div className="bg-custom/20 rounded" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-custom/20 rounded" />
            <div className="bg-custom/20 rounded" />
            <div className="bg-custom/20 rounded" />
            <div className="bg-custom/20 rounded" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-custom/20 rounded" />
            <div className="bg-custom/20 rounded" />
            <div className="bg-custom/20 rounded" />
            <div className="bg-custom/20 rounded" />
          </div>
        </div>
        <div
          className="absolute w-full h-full flex space-x-4"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg shadow-xl animate-rotate-cards"
            src="lib.jpg"
            alt="Library 1"
          />
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg shadow-xl animate-rotate-cards"
            src="book6.jpg"
            alt="Library 2"
          />
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg shadow-xl animate-rotate-cards"
            src="lib3.jpg"
            alt="Library 3"
          />
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg shadow-xl animate-rotate-cards"
            src="lib.jpg"
            alt="Library 4"
          />
        </div>
      </div>
    </div>
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Experience the future of digital reading with our innovative
            features
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg transform transition-transform hover:scale-105 duration-300">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-brain text-2xl text-custom" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    AI-Powered Insights
                  </h3>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  Get intelligent summaries, key takeaways, and personalized
                  reading recommendations powered by advanced AI.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg transform transition-transform hover:scale-105 duration-300">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-sync-alt text-2xl text-custom" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Cross-Device Sync
                  </h3>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  Seamlessly continue your reading journey across all your
                  devices with real-time synchronization.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg transform transition-transform hover:scale-105 duration-300">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-users text-2xl text-custom" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Community Features
                  </h3>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  Connect with fellow readers, share insights, and participate
                  in engaging book discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Popular Books
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover trending books in our collection
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2">
          <div className="book-card bg-white overflow-hidden shadow rounded-lg">
            <div className="book-card-front">
              <img
                src="book1.jpg"
                alt="Book 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  The Future of AI
                </h3>
                <p className="mt-2 text-sm text-gray-500">By Sarah Johnson</p>
              </div>
            </div>
            <div className="book-card-back p-6">
              <h3 className="text-xl font-bold mb-4">The Future of AI</h3>
              <p className="text-gray-600 mb-4">
                An insightful exploration of artificial intelligence and its
                impact on society. This book delves into the latest developments
                in AI technology and what they mean for our future.
              </p>
              <p className="text-gray-500 mb-4">
                Author: Sarah Johnson
                <br />
                Pages: 320
                <br />
                Published: 2024
              </p>
              <a
                href="#"
                className="bg-custom text-white px-4 py-2 rounded-lg inline-block hover:bg-custom/90"
              >
                Buy Now - $29.99
              </a>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="book2.jpg"
              alt="Book 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                Digital Innovation
              </h3>
              <p className="mt-2 text-sm text-gray-500">By Michael Chen</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="book3.jpg"
              alt="Book 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                Growth Mindset
              </h3>
              <p className="mt-2 text-sm text-gray-500">By Emily Parker</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="book4.jpg"
              alt="Book 4"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                Tech Trends 2024
              </h3>
              <p className="mt-2 text-sm text-gray-500">By David Wilson</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="book5.jpg"
              alt="Book 5"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                Dark Secrets
              </h3>
              <p className="mt-2 text-sm text-gray-500">By Alex Thompson</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="book6.jpg"
              alt="Book 6"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                Path to Success
              </h3>
              <p className="mt-2 text-sm text-gray-500">By Rachel Adams</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="book7.jpg"
              alt="Book 7"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                Lost in Time
              </h3>
              <p className="mt-2 text-sm text-gray-500">By James Morgan</p>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="book8.jpg"
              alt="Book 8"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                Love &amp; Life
              </h3>
              <p className="mt-2 text-sm text-gray-500">By Sophie Grant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer className="bg-white">
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
              <i className="fas fa-envelope text-3xl text-custom" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-center text-gray-900">
              Email Us
            </h3>
            <p className="mt-2 text-center text-gray-500">support@lithub.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 duration-300 animate-fade-in-up delay-300">
            <div className="flex items-center justify-center">
              <i className="fas fa-phone text-3xl text-custom" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-center text-gray-900">
              Call Us
            </h3>
            <p className="mt-2 text-center text-gray-500">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 duration-300 animate-fade-in-up delay-500">
            <div className="flex items-center justify-center">
              <i className="fas fa-map-marker-alt text-3xl text-custom" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-center text-gray-900">
              Visit Us
            </h3>
            <p className="mt-2 text-center text-gray-500">
              123 Library Street
              <br />
              San Francisco, CA 94105
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Company
          </h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Support
          </h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Legal
          </h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Connect
          </h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-8">
        <p className="text-base text-gray-400 text-center">
          © 2024 LitHub. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</>

  )
}

export default Home