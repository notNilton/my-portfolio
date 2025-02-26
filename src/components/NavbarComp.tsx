import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavbarStyle.css";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar: FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const location = useLocation();

  return (
    <div className="navbar">
      <ul className="list">
        <li>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        {/* <li>
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "active" : ""}
          >
            Blog
          </Link>
        </li> */}
        <li>
          <Link
            to="/resume"
            className={location.pathname === "/resume" ? "active" : ""}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
      </ul>

      <div className="toolbar">
        <button className="theme" onClick={toggleTheme}>
          {theme === "light" ? "Dark Theme" : "Light Theme"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
