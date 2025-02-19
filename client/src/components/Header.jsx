import React from 'react';

function Header({ onSearch }) {
    return (
        <header className="bg-white shadow-sm fixed w-full z-50">
            <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <img src="logo.png" alt="E-Library Logo" className="h-8 w-auto" />
                    </div>
                    <div className="flex-1 flex items-center justify-center px-8">
                        <div className="w-full max-w-2xl relative">
                            <input
                                type="text"
                                id="searchInput"
                                placeholder="Search books, authors, or topics..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 !rounded-button focus:outline-none focus:ring-1 focus:ring-custom focus:border-custom"
                                onChange={(e) => onSearch(e.target.value)}
                            />
                            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button className="text-gray-600 hover:text-custom">
                            <i className="far fa-heart text-xl"></i>
                        </button>
                        <button className="text-gray-600 hover:text-custom relative">
                            <i className="fas fa-shopping-cart text-xl"></i>
                            <span className="absolute -top-1 -right-1 bg-custom text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                        </button>
                        <button className="flex items-center space-x-2">
                            <img src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young person with a friendly smile, wearing business casual attire, against a neutral background&width=40&height=40&orientation=squarish&flag=2163e46c-7c05-40b2-ae78-f599bb508b6a" className="h-8 w-8 rounded-full object-cover" alt="User avatar" />
                            <i className="fas fa-chevron-down text-gray-500 text-sm"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;