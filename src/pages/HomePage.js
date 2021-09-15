import React from "react";
import PropTypes from "prop-types";
import BookSection from "../components/BookSection";
import { getShelves } from "../BooksAPI";

export default function HomePage({ books }) {
  return (
    <div className="home-page">
      {getShelves()
        .slice(0, 3)
        .map((shelf) => (
          <BookSection
            key={shelf.name}
            title={shelf.title}
            books={books.filter((book) => book.shelf === shelf.name)}
          ></BookSection>
        ))}
    </div>
  );
}

HomePage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};
