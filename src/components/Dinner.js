import "../App.css";
import { useEffect, useState } from "react";
import { marked } from "marked";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Dinner(props) {
  console.log("props", props.recipes);
  const items = props.recipes.filter((data) => {
    return data.fields.category === "Dinner";
  });
  console.log("items", items);

  const navigate = useNavigate();

  return (
    <div className="App">
      {/* <h1>Category: {props.recipes[0].fields.category}</h1>
      <img src={props.recipes[0].fields.image.fields.file.url} />
      <img src={props.recipes[1].fields.image.fields.file.url} /> */}

      {items.map((recipe, key) => {
        const recipeInstruction = marked(recipe.fields.instructions);
        return (
          <div>
            <Link to={`/dinner/${recipe.fields.id}`}>
              <h1>{recipe.fields.title}</h1>

              {/* <h2>{recipe.items}</h2> */}
              <img
                src={recipe.fields.image.fields.file.url}
                width="200px"
                height="200px"
              />
            </Link>
            <p>Rating: {recipe.fields.rating} / 5</p>
          </div>
        );
      })}
      <button onClick={() => navigate("/lunch")}>prev</button>
      <button onClick={() => navigate("/dessert")}>next</button>
    </div>
  );
}
