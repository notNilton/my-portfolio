import { FC } from "react";
import { curriculumData } from "../data/CurriculumData";
import "../styles/CurriculumStyle.css";

const Curriculum: FC = () => {
  const groupedData = {
    education: curriculumData.filter((item) => item.type === "education"),
    projects: curriculumData.filter((item) => item.type === "projects"),
    work: curriculumData.filter((item) => item.type === "work"),
  };

  return (
    <section className="curriculum">
      {Object.entries(groupedData).map(([key, phases]) => (
        <div key={key} className="curriculum-section">
          <h3 className="curriculum-section-title">
            {key === "education"
              ? "Educação"
              : key === "projects"
              ? "Projetos"
              : "Experiência Profissional"}
          </h3>
          <div className="curriculum-list">
            {phases.map((phase) => (
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
        </div>
      ))}
    </section>
  );
};

export default Curriculum;