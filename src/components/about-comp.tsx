// about-comp.tsx

import { FC } from "react";
import { aboutData } from "../data/about-data";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import "../styles/about-style.css";

const AboutComp: FC = () => {
  const iconMap: { [key: string]: JSX.Element } = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    leetcode: <FaCode />,
  };

  return (
    <div className="about">
      <div className="main-text">
        <div className="description">
          <h1 className="title">About Me</h1>
          <p className="text">{aboutData.description}</p>
        </div>

        {/* Seção de Influências */}
        <div className="influences">
          <h1 className="title">Readings and Major Influences</h1>
          <ul className="list">
            {aboutData.influences.map((influence, index) => (
              <li key={index}>- {influence}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Seção de Links */}
      <div className="links">
        <h1 className="title">My Profiles</h1>
        <ul>
          {aboutData.links.map((link, index) => {
            let icon = <FaCode />; // Ícone padrão
            if (link.includes("github")) icon = iconMap.github;
            if (link.includes("linkedin")) icon = iconMap.linkedin;
            if (link.includes("leetcode")) icon = iconMap.leetcode;

            return (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutComp;
