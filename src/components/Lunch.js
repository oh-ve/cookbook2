import "../App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Lunch(props) {
  console.log("props", props.recipes);
  const lunches = props.recipes.filter((data) => {
    return data.fields.category === "Lunch";
  });

  const navigate = useNavigate();

  return (
    <div className="App">
      {/* <h1>Category: {props.recipes[0].fields.category}</h1>
      <img src={props.recipes[0].fields.image.fields.file.url} />
      <img src={props.recipes[1].fields.image.fields.file.url} /> */}

      {lunches.map((recipe, key) => {
        return (
          <div>
            <Link to={`/lunch/${recipe.fields.id}`}>
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
      <button onClick={() => navigate("/breakfast")}>prev</button>
      <button onClick={() => navigate("/dinner")}>next</button>
    </div>
  );
}
