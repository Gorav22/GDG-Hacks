import React from 'react'

function Library() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>E-Library - Your Digital Reading Companion</title>
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
  <header className="bg-white shadow-sm fixed w-full z-50">
    <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <img
            src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
            alt="E-Library Logo"
            className="h-8 w-auto"
          />
        </div>
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              id="searchInput"
              placeholder="Search books, authors, or topics..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 !rounded-button focus:outline-none focus:ring-1 focus:ring-custom focus:border-custom"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-custom">
            <i className="far fa-heart text-xl" />
          </button>
          <button className="text-gray-600 hover:text-custom relative">
            <i className="fas fa-shopping-cart text-xl" />
            <span className="absolute -top-1 -right-1 bg-custom text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="flex items-center space-x-2">
            <img
              src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young person with a friendly smile, wearing business casual attire, against a neutral background&width=40&height=40&orientation=squarish&flag=2163e46c-7c05-40b2-ae78-f599bb508b6a"
              className="h-8 w-8 rounded-full object-cover"
              alt="User avatar"
            />
            <i className="fas fa-chevron-down text-gray-500 text-sm" />
          </button>
        </div>
      </div>
    </nav>
  </header>
  <div className="pt-16">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        <button className="!rounded-button bg-custom text-white px-6 py-2 whitespace-nowrap">
          All Categories
        </button>
        <button className="!rounded-button bg-white border border-gray-300 px-6 py-2 text-gray-700 hover:border-custom hover:text-custom whitespace-nowrap">
          New Releases
        </button>
        <button className="!rounded-button bg-white border border-gray-300 px-6 py-2 text-gray-700 hover:border-custom hover:text-custom whitespace-nowrap">
          Bestsellers
        </button>
        <button className="!rounded-button bg-white border border-gray-300 px-6 py-2 text-gray-700 hover:border-custom hover:text-custom whitespace-nowrap">
          Free Books
        </button>
        <button className="!rounded-button bg-white border border-gray-300 px-6 py-2 text-gray-700 hover:border-custom hover:text-custom whitespace-nowrap">
          Fiction
        </button>
        <button className="!rounded-button bg-white border border-gray-300 px-6 py-2 text-gray-700 hover:border-custom hover:text-custom whitespace-nowrap">
          Non-Fiction
        </button>
      </div>
      <div
        id="bookContainer"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
      >
        {/* Book cards will be dynamically inserted here */}
      </div>
    </div>
  </div>
  <footer className="bg-gray-800 text-white mt-12">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            Your trusted source for digital and physical books. We provide a
            vast collection of literature for all readers.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                New Releases
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Bestsellers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Returns
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get updates on new books and exclusive offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 !rounded-button rounded-r-none focus:outline-none focus:ring-1 focus:ring-custom"
            />
            <button className="!rounded-button rounded-l-none bg-custom px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>© 2024 E-Library. All rights reserved.</p>
      </div>
    </div>
  </footer>
</>

  )
}

export default Library