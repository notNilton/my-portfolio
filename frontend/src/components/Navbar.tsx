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
  styled,
  alpha,
  ButtonProps,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar: FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation("navbar");
  const location = useLocation();
  const muiTheme = useTheme();

  const navLinks = [
    { path: "/", key: "home" },
    { path: "/curriculum", key: "curriculum" },
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
        {/* left: nav links */}
        <Box component="nav" sx={{ display: "flex", gap: 2 }}>
          {navLinks.map((link) => (
            <NavButton
              key={link.path}
              component={RouterLink}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {t(link.key)}
            </NavButton>
          ))}
        </Box>

        {/* right: language + theme toggles */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button size="small" onClick={() => i18n.changeLanguage("en")}>
            EN
          </Button>
          <Button size="small" onClick={() => i18n.changeLanguage("ptBR")}>
            PT
          </Button>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
