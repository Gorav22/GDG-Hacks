import React from "react";

const PopularBooks = () => {
  const books = [
    {
      title: "The Future of AI",
      author: "Sarah Johnson",
      image:
        "https://creatie.ai/ai/api/search-image?query=A professional book cover design for a modern science fiction novel, featuring minimalist geometric patterns and futuristic elements against a clean background&width=300&height=400&orientation=portrait&flag=1c0b8b4b-3fbf-4c54-a88c-ad20657e27f5&flag=1ab0d75f-1cf8-4263-a15a-eb307585f675",
    },
    // Add more books here
  ];

  return (
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
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{book.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularBooks;