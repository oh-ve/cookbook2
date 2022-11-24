import React from "react";
//import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import SearchBar from "./Searchbar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Barmy British Food</h1>
      <SearchBar />

      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/breakfast">Breakfast</NavLink>
        <NavLink to="/lunch">Lunch</NavLink>
        <NavLink to="/dinner">Dinner</NavLink>
        <NavLink to="/dessert">Dessert</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
