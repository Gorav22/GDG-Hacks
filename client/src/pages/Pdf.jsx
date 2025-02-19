// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

const Pdf = () => {
  const [activeMode, setActiveMode] = useState("chat")
  const [pdfs, setPdfs] = useState([
    {
      id: "2",
      name: "Data Science Handbook.pdf",
      size: "4.8 MB",
      pages: 48,
      thumbnail:
        "https://public.readdy.ai/ai/img_res/58809d8c2d32b13ba34859567afe7755.jpg"
    }
  ])
  const [messages, setMessages] = useState([
    {
      id: "1",
      content:
        "Hello! I'm ready to help you understand your PDFs. What would you like to know?",
      isUser: false,
      timestamp: "15:10"
    }
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [notes, setNotes] = useState("Start taking notes here...")
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileUpload = event => {
    const files = event.target.files
    if (files) {
      const newPdfs = Array.from(files).map((file, index) => ({
        id: (pdfs.length + index + 1).toString(),
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        pages: Math.floor(Math.random() * 30) + 10,
        thumbnail:
          "https://public.readdy.ai/ai/img_res/32917dbe0655325a6817da13cc9cea9f.jpg"
      }))
      setPdfs([...pdfs, ...newPdfs])
      setShowUploadModal(false)
    }
  }

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: (messages.length + 1).toString(),
        content: inputMessage,
        isUser: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      }
      setMessages([...messages, newMessage])

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: (messages.length + 2).toString(),
          content:
            "I've analyzed your PDFs. Based on the content, here's what I found...",
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })
        }
        setMessages(prev => [...prev, aiResponse])
      }, 1000)

      setInputMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className="fas fa-book-reader text-indigo-600 text-2xl"></i>
            <h1 className="text-xl font-semibold text-gray-800">PDF Chat</h1>
          </div>
          <button
            onClick={() => setShowUploadModal(true)}
            className="!rounded-button bg-indigo-600 text-white px-4 py-2 flex items-center space-x-2 hover:bg-indigo-700 transition-colors whitespace-nowrap"
          >
            <i className="fas fa-plus"></i>
            <span>Upload PDF</span>
          </button>
        </div>
      </header>

      {/* PDF Management Area */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <Swiper
          modules={[Pagination]}
          spaceBetween={8}
          slidesPerView={4}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {pdfs.map(pdf => (
            <SwiperSlide key={pdf.id}>
              <div className="bg-white rounded-lg shadow-sm p-4 h-[360px]">
                <div className="relative h-[280px] mb-3 overflow-hidden rounded-lg">
                  <img
                    src={pdf.thumbnail}
                    alt={pdf.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                    onClick={() => setPdfs(pdfs.filter(p => p.id !== pdf.id))}
                  >
                    <i className="fas fa-times text-sm"></i>
                  </button>
                </div>
                <h3 className="text-sm font-medium text-gray-800 truncate">
                  {pdf.name}
                </h3>
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <span>{pdf.pages} pages</span>
                  <span>{pdf.size}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mode Selector */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-lg shadow-sm p-2 flex justify-center space-x-2">
          {["chat", "notes", "quiz"].map(mode => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className={`!rounded-button px-6 py-2 font-medium capitalize whitespace-nowrap ${
                activeMode === mode
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <i
                className={`fas fa-${
                  mode === "chat"
                    ? "comments"
                    : mode === "notes"
                    ? "note-sticky"
                    : "question-circle"
                } mr-2`}
              ></i>
              {mode} Mode
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 mt-6 mb-20">
        {activeMode === "chat" && (
          <div className="bg-white rounded-lg shadow-sm h-[600px] flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-4 ${
                      message.isUser
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p>{message.content}</p>
                    <span className="text-xs opacity-70 mt-2 block">
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t p-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={e => setInputMessage(e.target.value)}
                  placeholder="Ask anything about your PDFs..."
                  className="flex-1 border-none bg-gray-100 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-600"
                  onKeyPress={e => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="!rounded-button bg-indigo-600 text-white px-6 hover:bg-indigo-700 transition-colors whitespace-nowrap"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {activeMode === "notes" && (
          <div className="bg-white rounded-lg shadow-sm h-[600px] p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Notes</h2>
              <button className="!rounded-button bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 transition-colors whitespace-nowrap">
                <i className="fas fa-download mr-2"></i>
                Export Notes
              </button>
            </div>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="w-full h-[500px] p-4 border-none bg-gray-50 rounded-lg text-sm resize-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
        )}

        {activeMode === "quiz" && (
          <div className="bg-white rounded-lg shadow-sm h-[600px] p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Quiz Mode</h2>
              <button
                onClick={() => setIsGeneratingQuiz(true)}
                className="!rounded-button bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 transition-colors whitespace-nowrap"
              >
                <i className="fas fa-sync-alt mr-2"></i>
                Generate New Quiz
              </button>
            </div>
            <div className="text-center text-gray-500 mt-20">
              <i className="fas fa-brain text-6xl mb-4 text-indigo-200"></i>
              <p className="text-lg">
                Click the button above to generate a quiz based on your PDFs
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Upload PDFs
              </h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-indigo-600 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600">Click or drag files to upload</p>
              <p className="text-sm text-gray-500 mt-2">
                Supports multiple PDF files
              </p>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              multiple
              accept=".pdf"
              onChange={handleFileUpload}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Pdf