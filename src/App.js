import "./App.css";
import { useEffect, useState } from "react";
import { client } from "./client";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((res) => setRecipes(res.items))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>Contentful</h1>
      {recipes &&
        recipes.map((recipe) => (
          <div>
            <h1>{recipe.fields.title}</h1>
            <span>Rating: {recipe.fields.rating}</span>
            <img
              src={recipe.fields.image.fields.file.url}
              alt={recipe.title}
              height="400px"
            />
          </div>
        ))}
    </div>
  );
}

export default App;
