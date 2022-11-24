import "../App.css";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function Dinner(props) {
  console.log("props", props.recipes);
  const items = props.recipes.filter((data) => {
    return data.fields.category === "dinner";
  });
  console.log("items", items);

  return (
    <div className="App">
      {/* <h1>Category: {props.recipes[0].fields.category}</h1>
      <img src={props.recipes[0].fields.image.fields.file.url} />
      <img src={props.recipes[1].fields.image.fields.file.url} /> */}

      {items.map((recipe, key) => {
        return (
          <div>
            {recipe.fields.id}
            <Link to={`/dinner/${recipe.fields.id}`}>
              <h1>{recipe.fields.title}</h1>
            </Link>
            {/* <h2>{recipe.items}</h2> */}
            <img
              src={recipe.fields.image.fields.file.url}
              width="200px"
              height="200px"
            />
          </div>
        );
      })}
    </div>
  );
}
