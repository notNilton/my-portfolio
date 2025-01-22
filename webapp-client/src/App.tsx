import { useState, useEffect, FC } from "react";
import "./styles/App.css";
import Menu from "./components/Menu";
import Projects from "./components/Projects";

const App: FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

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
};

export default App;