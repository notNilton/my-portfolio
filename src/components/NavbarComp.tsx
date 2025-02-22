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
          <Link to="/projetos">Projetos</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/curriculum">Currículo</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>

      <div className="toolbar">
        <button className="theme" onClick={toggleTheme}>
          Tema {theme === "light" ? "Escuro" : "Claro"}
        </button>

        {/* <div className="languages">
          <img src={flagUK} alt="Inglês" className="flag" />
          <img src={flagBR} alt="Português" className="flag" />
          <img src={flagES} alt="Espanhol" className="flag" />
        </div> */}
      </div>
    </div>
  );
};

export default Menu;
