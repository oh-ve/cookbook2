import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Recipes({ recipes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const SingleRecipe = recipes.find(
    (element) => element.fields.id === Number(id)
  );
  console.log("Hello recipes", SingleRecipe);
  console.log(recipes);
  // const SingleRecipe = recipes.find((t) => t.id === id);
  // console.log("Hello", SingleRecipe);
  return (
    <div>
      <div>
        <img
          src={SingleRecipe.fields.image.fields.file.url}
          alt={SingleRecipe.fields.title}
          width="200px"
          height="200px"
        />
      </div>
      <h1>{SingleRecipe.fields.title}</h1>
      <p>Rating: {SingleRecipe.fields.rating} / 10</p>
      <p>
        Ingredients:{" "}
        {SingleRecipe.fields.ingredients.map((ingredient) => (
          <div>
            <input type="checkbox" id="scales" name="scales"></input>
            {ingredient}
          </div>
        ))}
      </p>
      <p>{SingleRecipe.fields.instructions}</p>
    </div>
  );
}
