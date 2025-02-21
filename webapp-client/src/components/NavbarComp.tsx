import { FC } from "react";
import { Link } from "react-router-dom";
import flagUK from "../assets/flags/flag-uk.svg";
import flagBR from "../assets/flags/flag-br.svg";
import flagES from "../assets/flags/flag-es.svg";
import "../styles/NavbarStyle.css";

interface MenuProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Menu: FC<MenuProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="navbar">
      <ul className="list">
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/curriculum">Curriculum</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className="toolbar">
        <button className="theme" onClick={toggleTheme}>
          {theme === "light" ? "Light" : "Dark"} Theme
        </button>

        <div className="languages">
          <img src={flagUK} alt="English" className="flag" />
          <img src={flagBR} alt="Portuguese" className="flag" />
          <img src={flagES} alt="Español" className="flag" />
        </div>
      </div>

      {/* Version Section */}
      <div className="version">
        <p>Version 1.0.0</p>
      </div>
    </div>
  );
};

export default Menu;
