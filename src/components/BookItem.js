import React, { useContext } from "react";
import { getShelves } from "../BooksAPI";
import BooksContext from "../contexts/BooksContext";
import "./BookItem.scss";

export default function BookItem({ book }) {
  const { books, updateBook } = useContext(BooksContext);

  const handleChangeShelf = (shelf) => updateBook(book, shelf);

  const getShelf = () => {
    if (book.shelf) {
      return book.shelf;
    }

    const found = books.find((b) => b.id === book.id);

    return found ? found.shelf : "none";
  };

  return (
    <div className="book-list__item">
      <div className="head">
        <img
          src={book.imageLinks.thumbnail}
          alt={book.title}
          width="128"
          height="193"
        />
        <div className="shelf-changer">
          <select
            aria-label="Change shelf"
            value={getShelf()}
            multiple={false}
            onChange={(e) => handleChangeShelf(e.target.value)}
          >
            <option value="move" disabled="">
              Move to...
            </option>
            {getShelves().map((shelf) => (
              <option key={shelf.name} value={shelf.name}>
                {shelf.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <span className="title">{book.title}</span>
      <br />
      <span className="author">
        {book.authors ? (
          book.authors.map((a, i) => (
            <span key={i} className="author">
              {a}
            </span>
          ))
        ) : (
          <span className="author">No author</span>
        )}
      </span>
    </div>
  );
}
