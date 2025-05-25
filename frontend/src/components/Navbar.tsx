import { FC } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { DarkMode, LightMode } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  useTheme,
  Theme,
  styled,
  alpha,
  ButtonProps,
} from "@mui/material";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar: FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const muiTheme = useTheme();

  const navLinks = [
    { path: "/", label: "Home" },
    // { path: "/blog", label: "Blog" },
  ];

  interface NavButtonProps extends ButtonProps {
    component?: React.ElementType;
    to?: string;
  }

  const NavButton = styled(Button)<NavButtonProps>(({ theme }) => ({
    textTransform: "none",
    fontWeight: 500,
    letterSpacing: "0.5px",
    borderRadius: "4px",
    padding: "8px 16px",
    transition: "all 0.2s ease",
    "&.active": {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
    },
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.05),
    },
  }));

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(8px)",
        backgroundColor: alpha(muiTheme.palette.background.default, 0.8),
        borderBottom: `1px solid ${alpha(muiTheme.palette.divider, 0.1)}`,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 3 }}>
        <Box component="nav" sx={{ display: "flex", gap: 0.5 }}>
          {navLinks.map((link) => (
            <NavButton
              key={link.path}
              component={RouterLink}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.label}
            </NavButton>
          ))}
        </Box>

        <IconButton
          onClick={toggleTheme}
          size="medium"
          sx={{
            borderRadius: "4px",
            color: muiTheme.palette.text.secondary,
            "&:hover": {
              backgroundColor: alpha(muiTheme.palette.primary.main, 0.05),
              color: muiTheme.palette.primary.main,
            },
          }}
        >
          {theme === "light" ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;