import "../App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Lunch(props) {
  console.log("props", props.recipes);
  const lunches = props.recipes.filter((data) => {
    return data.fields.category === "lunch";
  });

  return (
    <div className="App">
      {/* <h1>Category: {props.recipes[0].fields.category}</h1>
      <img src={props.recipes[0].fields.image.fields.file.url} />
      <img src={props.recipes[1].fields.image.fields.file.url} /> */}

      {lunches.map((recipe, key) => {
        return (
          <div>
            {recipe.fields.id}
            <Link to={`/lunch/${recipe.fields.id}`}>
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
