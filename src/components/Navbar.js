
import React from "react";
//import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./components/navbar.css";

const Navbar = () => {

 
  return (
    <nav className="navbar">
      <h1>Barmy British Food</h1>
      <div className="links">
        <Navlink to="/">Home</Navlink>
        <Navlink to="/recipes">Breakfast</Navlink>
        <Navlink to="/recipes">Lunch</Navlink>
        <Navlink to="/recipes">Dinner</Navlink>
        <Navlink to="/recipes">Desert</Navlink>
      </div>
    </nav>
  );
};

export default Navbar;

