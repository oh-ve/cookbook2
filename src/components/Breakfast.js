import "../App.css";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

// export default function Breakfast(props) {
//   console.log(props.recipes);

//   return (
//     <div className="breakfast">
//       {/* <img src={props.recipes.fields.image.fields.file.url} /> */}
//       <h1>Category: {props.recipes[0].fields.category}</h1>
//       <img
//         width={400}
//         height={400}
//         src={props.recipes[6].fields.image.fields.file.url}
//       />
//       <img
//         width={400}
//         height={400}
//         src={props.recipes[7].fields.image.fields.file.url}
//       />
//       <br />
//       <img
//         width={400}
//         height={400}
//         src={props.recipes[8].fields.image.fields.file.url}
//       />
//       <img
//         width={400}
//         height={400}
//         src={props.recipes[9].fields.image.fields.file.url}
//       />
//     </div>
//   );
// }

export default function Breakfast(props) {
  console.log("props", props.recipes);
  const breakfasts = props.recipes.filter((data) => {
    return data.fields.category === "Breakfast";
  });

  return (
    <div className="App">
      {/* <h1>Category: {props.recipes[0].fields.category}</h1>
      <img src={props.recipes[0].fields.image.fields.file.url} />
      <img src={props.recipes[1].fields.image.fields.file.url} /> */}

      {breakfasts.map((recipe, key) => {
        return (
          <div>
            <Link to={`/lunch/${recipe.fields.id}`}>
              <h1>{recipe.fields.title}</h1>

              {/* <h2>{recipe.items}</h2> */}
              <img
                src={recipe.fields.image.fields.file.url}
                width="200px"
                height="200px"
              />
            </Link>
            <p>Rating: {recipe.fields.rating} / 5</p>
          </div>
        );
      })}
    </div>
  );
}
