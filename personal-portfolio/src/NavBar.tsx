import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav font-serif bg-secondary">
      <Link to="/" className="site-title">
        Home
      </Link>
      <ul>
        <li>
          <button className="btn btn-neutral hover:bg-primary">
            <Link to="/AboutMe">About Me</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
