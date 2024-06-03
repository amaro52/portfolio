import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Home
      </Link>
      <ul>
        <li>
          <Link to="/AboutMe">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
