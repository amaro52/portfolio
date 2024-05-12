// import { useState } from "react";
// import reactLogo from "./assets/react.svg";

import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <h2 className="btn btn-circle bg-sky-300">Hello</h2>

      <a href="/AboutMe">
        <button>About Me</button>
      </a>
      <a href="/AboutMe">
        {" "}
        <p>about me 2</p>
      </a>
    </main>
  );
}

export default App;
