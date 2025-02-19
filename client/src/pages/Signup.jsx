import React from 'react'

function Signup() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <style>
        {`
          .animate-fadeIn { animation: fadeIn 0.5s ease-in; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          #slideshow img { animation: slideshow 14s infinite; }
          @keyframes slideshow { 0%, 20% { opacity: 1; } 25%, 100% { opacity: 0; } }
        `}
      </style>
      <div className="bg-white shadow-md rounded-lg flex max-w-4xl w-full">
        <div className="w-1/2 p-8">
          <div className="flex justify-center mb-6">
            <div className="text-4xl font-bold text-purple-600">LOGO</div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Create your account</h2>
          <p className="text-center text-gray-600 mb-6">
            Or{' '}
            <a className="text-blue-600" href="#">
              sign in to your existing account
            </a>
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email address</label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="you@example.com"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder=""
                type="password"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Confirm password</label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder=""
                type="password"
              />
            </div>
            <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800">
              Create Account
            </button>
          </form>
          <p className="text-center text-gray-600 text-sm mt-4">
            By signing up, you agree to our{' '}
            <a className="text-blue-600" href="#">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className="text-blue-600" href="#">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute inset-0 w-full h-full" id="slideshow">
            <img
              alt="Illustration of a robot talking to a group of people"
              className="absolute inset-0 w-full h-full object-cover rounded-r-lg animate-fadeIn"
              src="https://storage.googleapis.com/a1aa/image/Uy8T4xQW26P2htd3t9KXRPj1RCC7WlhWPEPIce7hE-M.jpg"
              style={{ animationDelay: '0s' }}
            />
            <img
              alt="Illustration of a robot interacting with a human"
              className="absolute inset-0 w-full h-full object-cover rounded-r-lg animate-fadeIn"
              src="https://storage.googleapis.com/a1aa/image/5X_Ys8rWTyEIFXi4T8tjCFcXv7Ur3L_Op14i6VoSyVs.jpg"
              style={{ animationDelay: '2s' }}
            />
            <img
              alt="Illustration of a robot presenting data to a group of people"
              className="absolute inset-0 w-full h-full object-cover rounded-r-lg animate-fadeIn"
              src="sigup.jpg"
              style={{ animationDelay: '4s' }}
            />
            <img
              alt="Illustration of a robot assisting a person with a task"
              className="absolute inset-0 w-full h-full object-cover rounded-r-lg animate-fadeIn"
              src="https://storage.googleapis.com/a1aa/image/m8YRoO20Mprc05jGHMjHDrZq9l2xy8L1xAjcnqbz4JM.jpg"
              style={{ animationDelay: '6s' }}
            />
            <img
              alt="Illustration of a robot and a human shaking hands"
              className="absolute inset-0 w-full h-full object-cover rounded-r-lg animate-fadeIn"
              src="https://storage.googleapis.com/a1aa/image/H9u5yCoV81APF2p639rkHWixjXlf6RIvNehOb3HwDrw.jpg"
              style={{ animationDelay: '8s' }}
            />
            <img
              alt="Illustration of a robot teaching a group of people"
              className="absolute inset-0 w-full h-full object-cover rounded-r-lg animate-fadeIn"
              src="https://storage.googleapis.com/a1aa/image/suY9w3_D1iv1bZr96BuXFMLyMwPuP6XJdzb0ZId4ErQ.jpg"
              style={{ animationDelay: '10s' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup