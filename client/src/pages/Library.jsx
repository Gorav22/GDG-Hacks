import React,{useEffect, useState} from 'react'
import Footer from '../components/Footer';
import BookList from '../components/Booklist';
import Header from '../components/Header';

function Library() {
  const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('programming');

    useEffect(() => {
        fetchBooks(query);
    }, [query]);

    const fetchBooks = async (query) => {
        const apiKey = 'AIzaSyARXrSQ5v_4UJ_k5blE0KAiEFzVc2Pvmkk'; // Replace with your API key
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`);
        const data = await response.json();
        setBooks(data.items || []);
    };

    return (
        <div className="bg-gray-50 font-sans">
            <Header onSearch={setQuery} />
            <div className="pt-16">
                <BookList books={books} />
            </div>
            <Footer />
        </div>
    );
}

export default Library