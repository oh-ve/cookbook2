import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  console.log("search", props.recipes);

  const result = props.recipes.filter((recipe) => {
    console.log("result", recipe);
    if (searchInput === "") {
      return recipe;
    } else {
      return recipe.fields.title.toLowerCase().includes(searchInput);
    }
  });

  return (
    <div className="searchbar">
      <input
        className="searchinput"
        type="search"
        placeholder="Search here..."
        onChange={handleChange}
        value={searchInput}
      />
      <div>
        {result.map((recipe) => (
          <div>
            <Link to={`/dinner/${recipe.fields.id}`}>
              {recipe.fields.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
