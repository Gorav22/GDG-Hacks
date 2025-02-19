import { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hi Sarah, how's the quarterly report coming along?", time: "11:30 AM", isSent: false },
    { text: "Almost done! I'm just finalizing the numbers and will send it over soon.", time: "11:35 AM", isSent: true, status: 'double-check' },
    { text: "Great! Looking forward to reviewing it.", time: "11:40 AM", isSent: false },
    { text: "Sure, I'll send you the report by EOD.", time: "12:30 PM", isSent: true, status: 'single-check' },
  ]);

  const chats = [
    { 
      name: "Sarah Johnson",
      time: "12:30 PM",
      message: "Sure, I'll send you the report by EOD.",
      online: true,
      image: "https://creatie.ai/ai/api/search-image?query=A professional headshot of a young business woman with a warm smile, wearing a blazer, against a neutral background&width=48&height=48&orientation=squarish&flag=701bcc44-b4eb-4858-9bc4-6f3057d685b1&flag=3e183261-95ce-460a-8678-cbe3115d6365&flag=acbd8df2-9488-411f-842f-45e0877cf991"
    },
    { 
      name: "Michael Chen",
      time: "11:45 AM",
      message: "Let's schedule a meeting for tomorrow.",
      online: false,
      image: "https://creatie.ai/ai/api/search-image?query=A professional headshot of a middle-aged businessman wearing a suit and tie, with a confident expression&width=48&height=48&orientation=squarish&flag=fdc6f948-f440-4c4e-a785-fd7703b31b6f&flag=a9cc18d2-fdcc-4779-9290-cdec6b1681c5&flag=03577f93-1914-47a6-9670-47c00a599bd0"
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, {
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isSent: true,
        status: 'single-check'
      }]);
      setMessage('');
    }
  };

  return (
    <div className="bg-gray-50 h-screen flex max-w-8xl mx-auto w-full shadow-lg">
      {/* Chat List Sidebar */}
      <aside className="w-96 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" className="h-8" />
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search or start new chat"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-custom"
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {chats.map((chat, index) => (
            <div key={index} className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img src={chat.image} alt="User" className="w-12 h-12 rounded-full" />
                  <div className={`absolute bottom-0 right-0 w-3 h-3 ${chat.online ? 'bg-green-500' : 'bg-gray-400'} rounded-full border-2 border-white`}></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-900">{chat.name}</h3>
                    <span className="text-sm text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{chat.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
      <main className="flex-1 flex flex-col bg-gray-100">
        <header className="bg-white p-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img src="https://creatie.ai/ai/api/search-image?query=A modern, friendly robot or AI assistant icon with blue accent colors&width=48&height=48&orientation=squarish&flag=63759358-86e9-4cf7-988f-d03f29d5fc76&flag=bfa240b6-4487-45fc-b3c9-4a1642b79f9e" alt="AI Assistant" className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="font-semibold text-gray-900">AI Assistant</h2>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.isSent ? 'justify-end' : 'justify-start'}`}>
               <div className={`${msg.isSent ? 'bg-gray-500 text-white' : 'bg-white'} rounded-lg p-3 max-w-md shadow-sm`}>
                <p>{msg.text}</p>
                <span className={`text-xs ${msg.isSent ? 'text-white/80' : 'text-gray-500'} mt-1 block`}>
                  {msg.time}
                  {msg.isSent && (
                    <i className={`fas fa-check${msg.status === 'double-check' ? '-double' : ''} ml-1`}></i>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <i className="far fa-smile"></i>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <i className="fas fa-paperclip"></i>
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message"
              className="flex-1 border-0 bg-gray-100 rounded-full px-4 py-2 focus:ring-2 focus:ring-custom"
            />
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <i className="fas fa-microphone"></i>
            </button>
            <button
              onClick={handleSendMessage}
              className="p-2 bg-custom text-white rounded-full hover:bg-custom/90"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;