import React, { useState } from "react";
import BookSection from "../components/BookSection";
import * as BookAPI from "../BooksAPI";
import "./SearchPage.scss";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);

    if (e.target.value === "") {
      setBooks([]);
    } else {
      BookAPI.search(e.target.value).then((res) =>
        setBooks(res.error ? [] : res)
      );
    }
  };

  return (
    <div className="search-page">
      <div className="search-form">
        <input
          type="text"
          placeholder="Search by Title or by Author"
          value={input}
          onChange={handleInputChange}
        />
      </div>

      <BookSection title="Search Results" books={books} />
    </div>
  );
}
