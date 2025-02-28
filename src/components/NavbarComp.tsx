import { FC, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "../styles/NavbarStyle.css";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar: FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const renderNavLinks = () => {
    const links = [
      { path: "/projects", label: "Projects" },
      { path: "/blog", label: "Blog" },
      { path: "/resume", label: "Resume" },
      { path: "/about", label: "About" },
    ];

    return links.map((link) => (
      <li key={link.path}>
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
          <IconButton
            onClick={handleMenuOpen}
            color="inherit"
            className="menu-button"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
          >
            {renderNavLinks().map((link, index) => (
              <MenuItem key={index} onClick={handleMenuClose}>
                {link}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <ul className="list">{renderNavLinks()}</ul>
      )}

      <div className="toolbar">
        <IconButton onClick={toggleTheme} color="inherit">
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
