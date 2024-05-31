import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

const App = () => {
  let component; //: (() => JSX.Element) | undefined;
  switch (window.location.pathname) {
    case "/":
      component = <HomePage />;
      break;
    case "/AboutMe":
      component = <AboutMe />;
      break;
    default:
      break;
  }

  return (
    <>
      <NavBar />
      {component}
    </>
  );
};

export default App;
