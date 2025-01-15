import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Optional custom styles

const App = () => {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [newPost, setNewPost] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://favqs.com/api/qotd', {
        headers: {
          Authorization: 'Token token="e0d1dd5f4c40dc0465eaa6e873ae066b"',
        },
      });
      setQuote(response.data.quote.body);
      setAuthor(response.data.quote.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const createPost = () => {
    if (quote) {
      setNewPost(`"${quote}" - ${author}`);
    } else {
      alert('Please generate a quote first!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="w-full max-w-2xl p-8 bg-white rounded-3xl shadow-xl transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">Random Quote Generator</h1>

        <div className="mb-8">
          {quote ? (
            <blockquote className="text-xl italic text-gray-700 text-center border-l-4 pl-4 border-purple-500">
              "{quote}"
              <footer className="text-right mt-2 text-gray-500">- {author}</footer>
            </blockquote>
          ) : (
            <p className="text-lg text-gray-600 text-center">Click the button below to get inspired!</p>
          )}
        </div>

        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={fetchQuote}
            className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 transition"
          >
            Generate Quote
          </button>
          <button
            onClick={createPost}
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition"
          >
            Create Post
          </button>
        </div>

        {newPost && (
          <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">New Post:</h2>
            <p className="text-lg text-gray-700">{newPost}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
