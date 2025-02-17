import { useState, useEffect, FC } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./styles/AppStyle.css";
import Menu from "./components/MenuComp";
import Projects from "./components/ProjectsComp";
import Curriculum from "./components/CurriculumComp";
import AboutComp from "./components/AboutComp";
import React from "react";

const App: FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className="App">
        <Menu theme={theme} toggleTheme={toggleTheme} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/projects" />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/about" element={<AboutComp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
