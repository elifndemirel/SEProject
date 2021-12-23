import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const booksFromApi = await fetchBooks();
      setBooks(booksFromApi);
    };

    getBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await fetch("https://gutendex.com/books/?page=1");
    const data = await res.json();

    return data.results;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home books={books} />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
