import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav font-serif bg-primary">
      <Link to="/" className="site-title">
        Home
      </Link>
      <ul>
        <li>
          <button className="btn btn-neutral">
            <Link to="/AboutMe">About Me</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
