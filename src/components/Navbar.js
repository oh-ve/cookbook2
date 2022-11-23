import React from "react";
//import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/breakfast">Breakfast</NavLink>
        <NavLink to="/lunch">Lunch</NavLink>
        <NavLink to="/dinner">Dinner</NavLink>
      </nav>
    </div>
  );
}
