import { FC } from "react";
import { curriculumData } from "../data/CurriculumData";
import "../styles/CurriculumStyle.css";

const Curriculum: FC = () => {
  return (
    <section className="curriculum">
      <h2>My Curriculum</h2>
      <div className="curriculum-list">
        {curriculumData.map((phase) => (
          <div key={phase.id} className="curriculum-card">
            <div className="curriculum-info">
              <h3 className="curriculum-title">{phase.title}</h3>
              <p className="curriculum-date">{phase.date}</p>
              <p className="curriculum-short-description">
                {phase.shortDescription}
              </p>
              <p className="curriculum-long-description">
                {phase.longDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Curriculum;
