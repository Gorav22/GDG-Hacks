import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-12">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-gray-400">Your trusted source for digital and physical books. We provide a vast collection of literature for all readers.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Categories</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">New Releases</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Bestsellers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Shipping Info</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Subscribe to get updates on new books and exclusive offers.</p>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 !rounded-button rounded-r-none focus:outline-none focus:ring-1 focus:ring-custom" />
                            <button className="!rounded-button rounded-l-none bg-custom px-4 py-2">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 E-Library. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;