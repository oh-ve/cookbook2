import "../App.css";
import { useEffect, useState } from "react";
import { marked } from "marked";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Dessert(props) {
  console.log("props", props.recipes);
  const items = props.recipes.filter((data) => {
    return data.fields.category === "Dessert";
  });
  console.log("items", items);
  const navigate = useNavigate();

  return (
    <div className="App">
      {items.map((recipe, key) => {
        return (
          <div>
            <Link to={`/${recipe.fields.category}/${recipe.fields.id}`}>
              <h1>{recipe.fields.title}</h1>
            </Link>
            {/* <h2>{recipe.items}</h2> */}
            <img
              src={recipe.fields.image.fields.file.url}
              width="200px"
              height="200px"
            />

            <div className="star-rating">
              {[...Array(recipe.fields.rating)].map(() => {
                return <span className="star">&#9733;</span>;
              })}
              {[...Array(5 - recipe.fields.rating)].map(() => {
                return <span className="star">&#9734;</span>;
              })}
            </div>
          </div>
        );
      })}
      {items.map((recipe, key) => {
        const recipeInstruction = marked(recipe.fields.instructions);

        return (
          <div>
            <Link to={`/dessert/${recipe.fields.id}`}>
              <h1>{recipe.fields.title}</h1>

              {/* <h2>{recipe.items}</h2> */}
            </Link>
            <img
              src={recipe.fields.image.fields.file.url}
              width="200px"
              height="200px"
            />
            <div className="star-rating">
              {[...Array(recipe.fields.rating)].map(() => {
                return <span className="star">&#9733;</span>;
              })}
              {[...Array(5 - recipe.fields.rating)].map(() => {
                return <span className="star">&#9734;</span>;
              })}
            </div>
            {/* <p>Rating: {recipe.fields.rating} / 5</p> */}
          </div>
        );
      })}
      <button onClick={() => navigate("/dinner")}>prev</button>
    </div>
  );
}
