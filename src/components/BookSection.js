import React from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";
import "./BookSection.scss";

export default function BookSection({ title, books }) {
  return (
    <div className="book-section">
      <h2>{title}</h2>
      <br />
      <BookList books={books} />
    </div>
  );
}

BookSection.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};
