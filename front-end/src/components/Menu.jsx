import flagUK from "../assets/flags/flag-uk.svg";
import flagBR from "../assets/flags/flag-br.svg";
import flagES from "../assets/flags/flag-es.svg";
import "../styles/Menu.css"

function Menu({ theme, toggleTheme }) {
  return (
    <div className="menu">
      <ul className="list"> 
        <li>Projects</li>
        <li>About</li>
        <li>Curriculum</li>
        <li>Blog</li>
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
    </div>
  );
}

export default Menu;


