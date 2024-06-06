import { Link } from "react-router-dom";
import amogh from "./images/amogh-in-austin-avatar.jpg";

const NavBar = () => {
  return (
    <nav className="nav font-serif bg-secondary">
      <Link to="/" className="site-title hover:link-primary">
        Home
      </Link>
      <ul>
        <li>
          <Link to="/AboutMe">
            <button className="btn btn-neutral hover:bg-primary">
              About Me
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
