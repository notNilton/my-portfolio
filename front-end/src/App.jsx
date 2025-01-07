import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Menu from "./components/Menu"; // Import do Menu

function Projects() {
  return (
    <div className="projects">
      <p>SouComp Projects</p>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <Menu theme={theme} toggleTheme={toggleTheme} />
      <Projects />
    </div>
  );
}

export default App;
