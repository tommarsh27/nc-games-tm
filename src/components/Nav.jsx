import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navlinks">Home</Link>
      <Link to="/reviews" className="navlinks">ReviewList</Link>
    </nav>
  );
};

export default Nav;
