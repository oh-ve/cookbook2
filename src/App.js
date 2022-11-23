
import { useEffect, useState } from "react";
import { client } from "./client";
import Navbar from "./components/Navbar";
import "./App.css";


function App() {


  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((res) => {
        setRecipes(res.items);

        console.log(res.items);
      })

      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* <Routes>
        <Route path="/" element=></Route>
        <Route></Route>
      </Routes> */}
      <h1>Hello</h1>
      {recipes.map((recipe) => (
        <div>
          <h1>{recipe.fields.title}</h1>
          <img
            src={recipe.fields.image.fields.file.url}
            width="200px"
            height="200px"
          />
        </div>
      ))}

    </div>
  );
}

export default App;
