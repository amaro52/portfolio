import AboutMe from "./AboutMe";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  // let component; //: (() => JSX.Element) | undefined;
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <HomePage />;
  //     break;
  //   case "/AboutMe":
  //     component = <AboutMe />;
  //     break;
  //   default:
  //     break;
  // }

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
