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
    <section className="about">
      <p className="about-description">{aboutData.description}</p>
      <div className="links">
        <div className="title">My other platforms</div>
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
    </section>
  );
};

export default AboutComp;
