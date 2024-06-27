import { Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import HomePage from "./HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
};

export default App;
