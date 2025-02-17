import { FC } from "react";
import { aboutData } from "../data/AboutData";
import "../styles/AboutStyle.css";

const AboutComp: FC = () => {
  return (
    <section className="about">
      <h2>{aboutData.title}</h2>
      <p className="about-description">{aboutData.description}</p>
    </section>
  );
};

export default AboutComp;
