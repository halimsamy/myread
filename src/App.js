import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BooksContext from "./contexts/BooksContext";
import * as BookAPI from "./BooksAPI";
import "./App.scss";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => BookAPI.getAll().then((books) => setBooks(books)), []);

  const updateBook = (book, shelf) => {
    BookAPI.update(book, shelf).then(() => {
      setBooks([...books.filter((b) => b.id !== book.id), { ...book, shelf }]);
    });
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <BooksContext.Provider value={{ books, updateBook }}>
          <Switch>
            <Route path="/search" component={SearchPage} />
            <Route path="/" render={() => <HomePage books={books} />} />
          </Switch>
        </BooksContext.Provider>
      </div>
    </div>
  );
}

export default App;
