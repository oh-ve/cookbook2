import React from "react";
import { useEffect, useState } from "react";
import Breakfast from "./Breakfast";
import "./comp.css";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import Flag from "./flag.jpg";

export default function Home(props) {
  console.log(props.recipes);

  const breakfasts = props.recipes.filter(
    (recipe) => recipe.fields.category === "Breakfast"
  );

  const lunches = props.recipes.filter(
    (recipe) => recipe.fields.category === "Lunch"
  );

  const dinners = props.recipes.filter(
    (recipe) => recipe.fields.category === "Dinner"
  );

  const desserts = props.recipes.filter(
    (recipe) => recipe.fields.category === "Dessert"
  );

  console.log("Breakfasts", breakfasts);

  return (
    <div id="home">
      <div id="home-header">
        <img src={Flag} width="50px" height="35px" />
        <h1>Barmy British Food</h1>
        <img src={Flag} width="50px" height="35px" />
      </div>
      <div id="home-categories">
        <div class="home-categories">
          <Link to={`/breakfast`}>
            <img
              src={breakfasts[3].fields.image.fields.file.url}
              width="300px"
              height="300px"
            />
            <h1>{breakfasts[3].fields.category}</h1>
          </Link>
        </div>
        <div class="home-categories">
          <Link to={`/lunch`}>
            <img
              src={lunches[3].fields.image.fields.file.url}
              width="300px"
              height="300px"
            />
            <h1>{lunches[3].fields.category}</h1>
          </Link>
        </div>
        <div class="home-categories">
          <Link to={`/dinner`}>
            <img
              src={dinners[1].fields.image.fields.file.url}
              width="300px"
              height="300px"
            />
            <h1>{dinners[1].fields.category}</h1>
          </Link>
        </div>
        <div class="home-categories">
          <Link to={`/dessert`}>
            <img
              src={desserts[0].fields.image.fields.file.url}
              width="300px"
              height="300px"
            />
            <h1>{desserts[0].fields.category}</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
