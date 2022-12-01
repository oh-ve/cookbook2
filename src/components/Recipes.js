import { useParams, useNavigate } from "react-router-dom";
import { marked } from "marked";
import styles from "./Recipes.css";

export default function Recipes({ recipes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const SingleRecipe = recipes.find(
    (element) => element.fields.id === Number(id)
  );
  console.log("Hello recipes", SingleRecipe);
  console.log(recipes);

  const recipeInstruction = marked(SingleRecipe.fields.instructions);

  return (
    <div>
      <div className="card">
        <img
          src={SingleRecipe.fields.image.fields.file.url}
          alt={SingleRecipe.fields.title}
          className="card-image"
        />
      </div>
      <div className="card-body">
        <h2>{SingleRecipe.fields.title}</h2>
        <div className="star-rating">
          {[...Array(SingleRecipe.fields.rating)].map(() => {
            return <span className="star">&#9733;</span>;
          })}
          {[...Array(5 - SingleRecipe.fields.rating)].map(() => {
            return <span className="star">&#9734;</span>;
          })}
        </div>

        <h3>Ingredients:</h3>
        {SingleRecipe.fields.ingredients.map((ingredient) => (
          <div className="check">
            <input type="checkbox" id="scales" name="scales"></input>
            {ingredient}
          </div>
        ))}

        {/* <h5>Description: {console.log(recipe.fields.instructions)}</h5> */}
        <h3>Instruction:</h3>
        <section
          className="section"
          dangerouslySetInnerHTML={{ __html: recipeInstruction }}
        />
      </div>

      <button onClick={() => navigate(-1)}>
        Back to {SingleRecipe.fields.category.toLowerCase()}
      </button>
    </div>
  );
}
