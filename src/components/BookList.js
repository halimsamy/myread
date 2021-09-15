import React from "react";
import PropTypes from "prop-types";
import BookItem from "./BookItem";

export default function BookList({ books }) {
  const filterdBooks = books.filter((book) => book.imageLinks);

  return (
    <div className="row row-cols-auto">
      {filterdBooks.length > 0 ? (
        filterdBooks.map((book) => (
          <div className="col" key={book.id}>
            <BookItem book={book} />
          </div>
        ))
      ) : (
        <p>No books to display</p>
      )}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};
