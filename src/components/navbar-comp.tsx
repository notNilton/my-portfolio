import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "../styles/navbar-style.css";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar: FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const renderNavLinks = () => {
    const links = [
      { path: "/projects", label: "Projects" },
      { path: "/resume", label: "Resume" },
      { path: "/about", label: "About" },
    ];

    return links.map((link) => (
      <li key={link.path} onClick={() => setIsMenuOpen(false)}>
        <Link
          to={link.path}
          className={location.pathname === link.path ? "active" : ""}
        >
          {link.label}
        </Link>
      </li>
    ));
  };

  return (
    <nav className="navbar">
      {isMobile ? (
        <>
          <button onClick={toggleMenu} className="menu-button">
            <HiMenu size={24} />
          </button>
          {isMenuOpen && <ul className="mobile-menu">{renderNavLinks()}</ul>}
        </>
      ) : (
        <ul className="list">{renderNavLinks()}</ul>
      )}

      <div className="toolbar">
        <button onClick={toggleTheme} className="theme-button">
          {theme === "light" ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
