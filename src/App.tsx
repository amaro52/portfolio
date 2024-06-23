import AboutMe from "./AboutMe";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      {/* Pages */}
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
