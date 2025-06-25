// src/App.tsx
import React, { FC, useState, useEffect } from "react";
import {
  Box,
  ThemeProvider,
  CssBaseline
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import getTheme from "./theme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import "./styles/index.css"

const App: FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = getTheme(mode);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) setMode(saved);
    else {
      setMode("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    setMode(prev => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Box
          sx={{
            minHeight: "100vh",
            bgcolor: "background.default",
            color: "text.primary",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar theme={mode} toggleTheme={toggleTheme} />

          <Box
            component="main"
            sx={{
              flex: 1,
              display: "flex",         // ← make this a flex container
              flexDirection: "column", // ← stack its children vertically
              p: 3,
              mx: "auto",
              width: "100%",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/curriculum" element={<Curriculum />} />
              {/* ...other routes */}
            </Routes>
          </Box>
        </Box>
  
      </Router>
    </ThemeProvider>
  );
};

export default App;
