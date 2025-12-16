import { useState } from "react";
import booksData from "./data/books";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("home");
  const [favorites, setFavorites] = useState([]);

  // FILTER + SEARCH
  const filteredBooks = booksData.filter((book) => {
    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());

    if (category === "home") return matchSearch;

    if (category === "favorites")
      return favorites.some((fav) => fav.id === book.id) && matchSearch;

    return book.category === category && matchSearch;
  });

  // FAVORITE TOGGLE
  const toggleFavorite = (book) => {
    setFavorites((prev) =>
      prev.some((b) => b.id === book.id)
        ? prev.filter((b) => b.id !== book.id)
        : [...prev, book]
    );
  };

  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <h1 className="logo">📚 Onlayn Kutubxona</h1>

        {/* MENU */}
        <nav className="menu">
          <span
            className={category === "home" ? "menu-item active" : "menu-item"}
            onClick={() => setCategory("home")}
          >
            Home
          </span>
          <span
            className={category === "roman" ? "menu-item active" : "menu-item"}
            onClick={() => setCategory("roman")}
          >
            Roman
          </span>
          <span
            className={category === "sher" ? "menu-item active" : "menu-item"}
            onClick={() => setCategory("sher")}
          >
            Sherlar
          </span>
          <span
            className={
              category === "favorites" ? "menu-item active" : "menu-item"
            }
            onClick={() => setCategory("favorites")}
          >
            Sevimlilar ❤️
          </span>
        </nav>

        {/* SEARCH */}
        <input
          type="text"
          className="search-input"
          placeholder="Kitob nomini qidiring..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      {/* BOOK LIST */}
      <div className="container">
        {filteredBooks.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%" }}>
            Hech qanday kitob topilmadi 😕
          </p>
        ) : (
          filteredBooks.map((book) => (
            <div
              className="card"
              key={book.id}
              onClick={() => window.open(book.link)}
            >
              {/* HEART */}
              <div
                className="heart"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(book);
                }}
              >
                {favorites.some((b) => b.id === book.id) ? "❤️" : "🤍"}
              </div>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <span>{book.year}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
