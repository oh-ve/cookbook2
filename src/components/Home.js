import React from "react";
import { useEffect, useState } from "react";

export default function Home(props) {
  console.log(props.recipes);
  return (
    <div>
      {/* <h1>Category: {props.recipes[0].fields.category}</h1>
      <img src={props.recipes[0].fields.image.fields.file.url} />
      <img src={props.recipes[1].fields.image.fields.file.url} /> */}
    </div>
  );
}
