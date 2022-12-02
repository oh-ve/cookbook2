import React from "react";
import { useEffect, useState } from "react";
import Breakfast from "./Breakfast";
import "./comp.css";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import Flag from "./flag.jpg";

export default function Home(props) {
  // get all recipes
  // create 4 categories and filter out by category (state "breakfast" should contain all breakfast recipes)
  // display each category's picture statically at first to confirm everything works
  // create a function that changes the index of a given array every x amount of seconds
  // the call to that function should happen inside of a useEffect

  console.log(props.recipes);
  const [breakfastUrl, setBreakfastUrl] = useState(false);
  const [lunchUrl, setLunchUrl] = useState(false);
  const [dinnerUrl, setDinnerUrl] = useState(false);
  const [dessertsUrl, setDessertsUrl] = useState(false);

  const breakfasts = props.recipes.filter(
    (recipe) => recipe.fields.category === "Breakfast"
  );

  const lunches = props.recipes.filter(
    (recipe) => recipe.fields.category === "Lunch"
  );

  const dinners = props.recipes.filter(
    (recipe) => recipe.fields.category === "Dinner"
  );

  const desserts = props.recipes.filter(
    (recipe) => recipe.fields.category === "Dessert"
  );

  console.log("Breakfasts", breakfasts);
  console.log(breakfasts[0].fields.image.fields.file.url);
  const breakfast1 = breakfasts[0].fields.image.fields.file.url;
  const breakfast2 = breakfasts[1].fields.image.fields.file.url;
  const breakfast3 = breakfasts[2].fields.image.fields.file.url;
  const breakfast4 = breakfasts[3].fields.image.fields.file.url;
  console.log(breakfast1);
  const breakfastfotos = [breakfast1, breakfast2, breakfast3, breakfast4];

  // console.log(breakfastfotos[3]);

  console.log("HEREE", breakfastUrl);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const renderImage = () => {
        const randomImageIndex = Math.floor(
          Math.random() * breakfastfotos.length
        );
        console.log("index", breakfastfotos[randomImageIndex]);
        return setBreakfastUrl(breakfastfotos[randomImageIndex]);
      };
      renderImage();
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id="home">
      <div id="home-categories">
        <div class="home-categories">
          <Link to={`/breakfast`}>
            <img src={breakfastUrl} width="300px" height="300px" />
            <h1>{breakfasts[3].fields.category}</h1>
          </Link>
        </div>
        <div class="home-categories">
          <Link to={`/lunch`}>
            <img
              src={lunches[3].fields.image.fields.file.url}
              width="300px"
              height="300px"
            />
            <h1>{lunches[3].fields.category}</h1>
          </Link>
        </div>
        <div class="home-categories">
          <Link to={`/dinner`}>
            <img
              src={dinners[1].fields.image.fields.file.url}
              width="300px"
              height="300px"
            />
            <h1>{dinners[1].fields.category}</h1>
          </Link>
        </div>
        <div class="home-categories">
          <Link to={`/dessert`}>
            <img
              src={desserts[0].fields.image.fields.file.url}
              width="300px"
              height="300px"
            />
            <h1>{desserts[0].fields.category}</h1>
          </Link>
        </div>
        {/* 
        <Image
          source={breakfasts[currentImageIndex]}
          style={styles.imageStyle}
        /> */}
      </div>
    </div>
  );
}
