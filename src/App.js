import "./App.css";
import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";
import { client } from "./client";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
