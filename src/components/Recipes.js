import { useParams, useNavigate } from "react-router-dom";
import { marked } from "marked";
import styles from "./Recipes.css";

export default function Recipes({ recipes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const SingleRecipe = recipes.find((element) => element.recipe_id === id);
  console.log("Hello recipes", SingleRecipe);
  console.log(recipes);

  //const recipeInstruction = marked(SingleRecipe.instructions);

  return (
    <div>
      <h2>{SingleRecipe.title}</h2>
    </div>
  );
}
