import { FC } from "react";
import { curriculumData } from "../data/resume-data";
import "../styles/resume-style.css";

const Resume: FC = () => {
  // Ordena os dados pelo ID
  const sortedData = [...curriculumData].sort((a, b) => a.id - b.id);

  return (
    <section className="resume">
      {sortedData.map((item) => (
        <div key={item.id} className="resume-item">
          {/* Div com o título e o tipo */}
          <div className="resume-header">
            <h1 className="title">{item.title}</h1>
            <div className="info">
              <span className={"type"}>
                {item.type === "education" ? "Education" : "Work"}
              </span>
              <span className="date">{item.date}</span>
            </div>
          </div>

          <div className="resume-details">
            <p className="description">{item.longDescription}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Resume;
