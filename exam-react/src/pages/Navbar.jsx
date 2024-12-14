import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/signup" className="navbar-link">singup</Link>
  </nav>
);

export default Navbar;
