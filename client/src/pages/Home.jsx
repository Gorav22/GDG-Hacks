import React from 'react';

function Home() {
  return (
    <>
      {/* Meta tags and external resources */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>StudyHub - Your AI-Powered Digital Library</title>
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
          __html: `
            .animate-fade-in-down { animation: fadeInDown 1s ease-out; }
            .animate-fade-in-up { animation: fadeInUp 1s ease-out; }
            .animate-fade-in { animation: fadeIn 1s ease-out; }
            .animate-float { animation: float 3s ease-in-out infinite; }
            @keyframes fadeInDown { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
            @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
            @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
            @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
            .delay-300 { animation-delay: 300ms; }
            .delay-500 { animation-delay: 500ms; }
            .delay-700 { animation-delay: 700ms; }
            .hover\\:scale-105:hover { transform: scale(1.05); }
            .transition-transform { transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 300ms; }
            @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
            .animate-scroll { animation: scroll 20s linear infinite; }
            @keyframes rotateCards { 0% { transform: translateX(0) rotateY(0); } 25% { transform: translateX(-25%) rotateY(10deg); } 50% { transform: translateX(-50%) rotateY(0); } 75% { transform: translateX(-75%) rotateY(-10deg); } 100% { transform: translateX(-100%) rotateY(0); } }
            .animate-rotate-cards { animation: rotateCards 20s linear infinite; }
            .card-perspective { transform-style: preserve-3d; perspective: 1000px; }
            .book-card { cursor: pointer; transition: transform 0.6s; transform-style: preserve-3d; position: relative; }
            .book-card.flipped { transform: rotateY(180deg); }
            .book-card-front, .book-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; -webkit-backface-visibility: hidden; }
            .book-card-back { transform: rotateY(180deg); background: white; }
          `,
        }}
      />

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="logo.png" alt="StudyHub" />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-custom text-custom border-b-2 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Library
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Features
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
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

      {/* Hero Section */}
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
                    <div className="rounded-md shadow bg-black">
                      <button className="!rounded-button text-black w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-custom hover:bg-custom/90 md:py-4 md:text-lg md:px-10">
                        Get Started
                      </button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3 bg-gray-100 hover:bg-gray-200">
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
              {[...Array(4)].map((_, i) => (
                <div key={i} className="grid grid-cols-2 gap-2">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="bg-custom/20 rounded" />
                  ))}
                </div>
              ))}
            </div>
            <div
              className="absolute w-full h-full flex space-x-4"
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              {["lib.jpg", "book6.jpg", "lib3.jpg", "lib.jpg"].map((src, i) => (
                <img
                  key={i}
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg shadow-xl animate-rotate-cards"
                  src={src}
                  alt={`Library ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Key Features Section */}
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
              {[
                {
                  icon: "fa-brain",
                  title: "AI-Powered Insights",
                  description:
                    "Get intelligent summaries, key takeaways, and personalized reading recommendations powered by advanced AI.",
                },
                {
                  icon: "fa-sync-alt",
                  title: "Cross-Device Sync",
                  description:
                    "Seamlessly continue your reading journey across all your devices with real-time synchronization.",
                },
                {
                  icon: "fa-users",
                  title: "Community Features",
                  description:
                    "Connect with fellow readers, share insights, and participate in engaging book discussions.",
                },
                {
                  icon: "fa-sticky-note",
                  title: "Note Generation",
                  description:
                    "Automatically generate concise and organized notes from any uploaded PDF or purchased ebook.",
                },
                {
                  icon: "fa-question-circle",
                  title: "Doubt Resolution",
                  description:
                    "Ask questions in natural language and receive AI-generated explanations and insights.",
                },
                {
                  icon: "fa-file-alt",
                  title: "Content Summarization",
                  description:
                    "Generate summaries of chapters, sections, or entire books for quick comprehension and review.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white overflow-hidden shadow rounded-lg transform transition-transform hover:scale-105 duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className={`fas ${feature.icon} text-2xl text-custom`} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Books Section */}
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
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white overflow-hidden shadow rounded-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={`book${i + 1}.jpg`}
                    alt={`Book ${i + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Book Title {i + 1}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">Author Name</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
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
              {[
                {
                  icon: "fa-envelope",
                  title: "Email Us",
                  description: "support@studyhub.com",
                },
                {
                  icon: "fa-phone",
                  title: "Call Us",
                  description: "+1 (555) 123-4567",
                },
                {
                  icon: "fa-map-marker-alt",
                  title: "Visit Us",
                  description: "123 Library Street\nSan Francisco, CA 94105",
                },
              ].map((contact, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${i * 300}ms` }}
                >
                  <div className="flex items-center justify-center">
                    <i className={`fas ${contact.icon} text-3xl text-custom`} />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-center text-gray-900">
                    {contact.title}
                  </h3>
                  <p className="mt-2 text-center text-gray-500 whitespace-pre-line">
                    {contact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              {
                title: "Company",
                links: ["About", "Careers", "Blog"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact Us", "FAQ"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms"],
              },
              {
                title: "Connect",
                links: ["Twitter", "LinkedIn", "Facebook"],
              },
            ].map((section, i) => (
              <div key={i}>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-4">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © 2024 StudyHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;