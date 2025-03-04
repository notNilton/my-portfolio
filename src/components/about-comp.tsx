import { FC } from "react";
import { aboutData } from "../data/about-data";
import "../styles/about-style.css";

const AboutComp: FC = () => {
  return (
    <section className="about">
      <h2>{aboutData.title}</h2>
      <p className="about-description">{aboutData.description}</p>
    </section>
  );
};

export default AboutComp;
