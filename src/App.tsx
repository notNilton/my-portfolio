import { useState, useEffect, FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./styles/AppStyle.css";
import Navbar from "./components/NavbarComp";
import Projects from "./components/ProjectsComp";
import Curriculum from "./components/CurriculumComp";
import AboutComp from "./components/AboutComp";

const App: FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/projects" />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/blog" element={<Curriculum />} /> */}
            <Route path="/resume" element={<Curriculum />} />
            <Route path="/about" element={<AboutComp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
