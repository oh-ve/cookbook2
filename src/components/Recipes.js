import { useParams, useNavigate } from "react-router-dom";
import { marked } from "marked";
import styles from "./Recipes.css";

export default function Recipes({ recipes }) {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const SingleRecipe = recipes.find(
    (element) => element.recipe_id === Number(id)
  );
  console.log("Hello recipes", SingleRecipe);
  console.log(recipes);
  console.log(recipes[0].recipe_id);

  const recipeInstruction = marked(SingleRecipe.instructions);

  return (
    <div>
      <div className="card">
        <img
          src={SingleRecipe.image}
          alt={SingleRecipe.title}
          className="card-image"
        />
        <div className="detail">
          <h2>{SingleRecipe.title}</h2>
          <div className="star-rating">
            {[...Array(SingleRecipe.rating)].map(() => {
              return <span className="star">&#9733;</span>;
            })}
            {[...Array(5 - SingleRecipe.rating)].map(() => {
              return <span className="star">&#9734;</span>;
            })}
          </div>
        </div>
      </div>
      <div className="card-body">
        <h3>Ingredients:</h3>
        {SingleRecipe.ingredients}
        {/* {SingleRecipe.ingredients.map((ingredient) => (
          <div className="check">
            <input type="checkbox" id="scales" name="scales"></input>
            {ingredient}
          </div>
        ))} */}

        {/* <h5>Description: {console.log(recipe.fields.instructions)}</h5> */}
        <div className="method">
          <h3>Instruction:</h3>
          <section
            className="section"
            dangerouslySetInnerHTML={{ __html: recipeInstruction }}
          />
          <div id="return">
            <button onClick={() => navigate(-1)} className="btn">
              Back to {SingleRecipe.category.toLowerCase()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
