import React from 'react';
const Chat = () => {
  return (
    <div className="flex h-screen bg-gradient-to-b from-purple-700 to-purple-600 overflow-hidden">
      <div className="w-1/4 bg-white rounded-l-lg shadow-xl overflow-hidden">
        <div className="p-6 bg-purple-600 text-white">
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-H7WJQCb8srapzBAtkMsFF5yXGwkIuFtoYw&s"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <p className="text-xl font-semibold">John Doe</p>
              <p className="text-sm">Online</p>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto bg-gray-50 max-h-[calc(100vh-200px)]">
          <div className="p-4 hover:bg-purple-100 cursor-pointer transition duration-300 ease-in-out">
            <div className="flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7gV305BIMlIVHnuG6sM8GZJq2q7frxaY7g&s"
                alt="Professional"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold text-purple-600">Dr. Smith</p>
                <p className="text-sm text-gray-600">Hi there! How can I help?</p>
              </div>
            </div>
          </div>
          <div className="p-4 hover:bg-purple-100 cursor-pointer transition duration-300 ease-in-out">
            <div className="flex items-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="Professional"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold text-purple-600">Lawyer Jane</p>
                <p className="text-sm text-gray-600">Let’s discuss your case.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-white rounded-r-lg shadow-xl overflow-hidden">
        <div className="p-6 bg-purple-600 text-white">
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7gV305BIMlIVHnuG6sM8GZJq2q7frxaY7g&s"
              alt="Professional"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <p className="text-xl font-semibold">Dr. Smith</p>
              <p className="text-sm">Online</p>
            </div>
          </div>
        </div>
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50 max-h-[calc(100vh-200px)]">
          <div className="mb-6">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm text-gray-800">Hello! How can I assist you today?</p>
              <span className="text-xs text-gray-500">10:00 AM</span>
            </div>
          </div>
          <div className="mb-6 flex justify-end">
            <div className="bg-purple-600 text-white p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm text-white">I need help with my project.</p>
              <span className="text-xs text-gray-200">10:01 AM</span>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white border-t border-gray-200">
          <div className="flex items-center">
            <button className="text-xl mr-4 text-purple-600 hover:text-purple-700">
              😀
            </button>
            <button className="font-bold text-lg mr-4 text-purple-600 hover:text-purple-700">
              B
            </button>
            <button className="italic text-lg mr-4 text-purple-600 hover:text-purple-700">
              I
            </button>

            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 shadow-md"
            />
            <button className="ml-4 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
