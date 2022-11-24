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
      {SingleRecipe.fields.title}
      {SingleRecipe.fields.ingredients}

      <p>Hello</p>
    </div>
  );
}
