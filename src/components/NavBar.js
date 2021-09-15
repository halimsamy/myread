import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  let location = useLocation();

  return (
    <div className="navbar">
      <div className="navbar__logo">MY READ</div>

      <div className="navbar__links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          My Books
        </Link>
        <Link
          to="/search"
          className={location.pathname === "/search" ? "active" : ""}
        >
          Search
        </Link>
      </div>
    </div>
  );
}
