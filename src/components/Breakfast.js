import "../App.css";
import { useEffect, useState } from "react";
import React from "react";

export default function Breakfast(props) {
  console.log(props.recipes);

  return (
    <div className="breakfast">
      {/* <img src={props.recipes.fields.image.fields.file.url} /> */}
      <h1>Category: {props.recipes[0].fields.category}</h1>
      <img
        width={400}
        height={400}
        src={props.recipes[6].fields.image.fields.file.url}
      />
      <img
        width={400}
        height={400}
        src={props.recipes[7].fields.image.fields.file.url}
      />
      <br />
      <img
        width={400}
        height={400}
        src={props.recipes[8].fields.image.fields.file.url}
      />
      <img
        width={400}
        height={400}
        src={props.recipes[9].fields.image.fields.file.url}
      />
    </div>
  );
}
