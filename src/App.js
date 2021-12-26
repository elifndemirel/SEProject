import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const url = "http://localhost:3000/data";

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong");
      })
      .then((books) => setBooks(books))
      .catch((error) => setError(error.message));
  }, []);
  if (error) return <h1>{error}</h1>;

  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home books={books} />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/favorites" element={<Favorites />} />
            <Route exact path="/library" element={<Library />} />
            <Route exact path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
