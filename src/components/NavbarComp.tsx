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
            to="/projetos"
            className={location.pathname === "/projetos" ? "active" : ""}
          >
            Projetos
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
            to="/curriculo"
            className={location.pathname === "/curriculo" ? "active" : ""}
          >
            Currículo
          </Link>
        </li>
        <li>
          <Link
            to="/sobre"
            className={location.pathname === "/sobre" ? "active" : ""}
          >
            Sobre
          </Link>
        </li>
      </ul>

      <div className="toolbar">
        <button className="theme" onClick={toggleTheme}>
          Tema {theme === "light" ? "Escuro" : "Claro"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
