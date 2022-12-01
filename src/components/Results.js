import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Results({ recipes }) {
  const { search } = useParams();
  const result = recipes.filter((recipe) => {
    console.log("result", recipes);
    if (search === "") {
      return recipe;
    } else {
      return recipe.fields.title.toLowerCase().includes(search);
    }
  });
  return (
    <div>
      {result.map((recipe) => (
        <div key={uuidv4()}>
          <Link to={`/${recipe.fields.category}/${recipe.fields.id}`}>
            {recipe.fields.title}
          </Link>
          <img
            src={recipe.fields.image.fields.file.url}
            alt={recipe.fields.title}
            width="200px"
            height="200px"
          />
        </div>
      ))}
    </div>
  );
}
