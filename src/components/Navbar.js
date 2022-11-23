import React from "react";
//import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Barmy British Food</h1>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipes">Breakfast</NavLink>
        <NavLink to="/recipes">Lunch</NavLink>
        <NavLink to="/recipes">Dinner</NavLink>
        <NavLink to="/recipes">Desert</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
