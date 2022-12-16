import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "./Results.css";

export default function Results({ recipes }) {
  const { search } = useParams();
  const [error, setError] = useState(null);
  const result = recipes.filter((recipe) => {
    //console.log("result", recipes);
    if (search === "") {
      return recipe;
    } else {
      return recipe.title.toLowerCase().includes(search);
    }
  });

  return (
    <div>
      {result.map((recipe) => (
        <div key={uuidv4()} className="result">
          <Link to={`/${recipe.category}/${recipe.recipe_id}`}>
            <h2>{recipe.title}</h2>
          </Link>
          <img src={recipe.image} alt={recipe.title} className="img" />
        </div>
      ))}
    </div>
  );
}
