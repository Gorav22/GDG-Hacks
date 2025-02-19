import React from 'react';

function BookList({ books }) {
    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                <button className="!rounded-button bg-custom text-white px-6 py-2 whitespace-nowrap">All Categories</button>
                <button className="!rounded-button bg-white border border-gray-300 px-6 py-2 text-gray-700 hover:border-custom hover:text-custom whitespace-nowrap">New Releases</button>
                <button className="!rounded-button bg-white border border-gray-300 px-6 py-2 text-gray-700 hover:border-custom hover:text-custom whitespace-nowrap">Bestsellers</button>
                <button className="!rounded-button bg-white border border-gray-300 px-6 py-2 text-gray-700 hover:border-custom hover:text-custom whitespace-nowrap">Free Books</button>
                <button className="!rounded-button bg-white border border-gray-300 px-6 py-2 text-gray-700 hover:border-custom hover:text-custom whitespace-nowrap">Fiction</button>
                <button className="!rounded-button bg-white border border-gray-300 px-6 py-2 text-gray-700 hover:border-custom hover:text-custom whitespace-nowrap">Non-Fiction</button>
            </div>

            <div id="bookContainer" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                {books.map((book, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <img src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/300x400'} alt={book.volumeInfo.title} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-1">{book.volumeInfo.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">by {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-custom font-semibold">{book.saleInfo?.listPrice?.amount || 'Free'}</span>
                                <button className="!rounded-button bg-custom text-white px-4 py-2 text-sm">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;