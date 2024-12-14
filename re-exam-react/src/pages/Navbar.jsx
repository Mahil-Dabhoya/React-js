import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
  
    <Link to="/" className="navbar-link">Home</Link>
    <Link to="/add-user" className="navbar-link">Add User</Link>
  </nav>
);

export default Navbar;