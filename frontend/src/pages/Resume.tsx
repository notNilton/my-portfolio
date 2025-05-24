import { FC } from "react";
import { curriculumData } from "../data/resume-data";
import "../styles/resume-style.css";

// List of technologies to boldify
const TECHNOLOGIES = [
  // Languages
  'TypeScript', 'JavaScript', 'Python', 'SQL', 'VBA', 'Node.js',
  // Libraries/Frameworks
  'Pandas', 'Numpy', 'Matplotlib', 'Plotly', 'Dialogflow', 'GPT-4',
  // Tools/Platforms
  'SQLite', 'REST APIs', 'SOAP', 'PowerBI', 'Excel', 'Google Sheets',
  'App Scripts', 'ETL', 'AWS Lambda', 'Firebase', 'NLP', 'REST API',
  'cloud integration', 'spatial databases', 'serverless architecture',
  'embedding validation', 'machine learning'
];

const Resume: FC = () => {
  const sortedData = [...curriculumData].sort((a, b) => a.id - b.id);

  // Function to boldify technologies in text
  const boldifyTechnologies = (text: string) => {
    // Split text into parts, boldifying matched technologies
    const parts = text.split(new RegExp(`(${TECHNOLOGIES.join('|')})`, 'gi'));
    
    return parts.map((part, index) => 
      TECHNOLOGIES.some(tech => tech.toLowerCase() === part.toLowerCase())
        ? <strong key={index}>{part}</strong>
        : part
    );
  };

  // Function to split items into columns
  const splitIntoColumns = (items: string[], maxColumns = 3) => {
    const columnCount = Math.min(
      Math.ceil(items.length / 4),
      maxColumns
    );
    const itemsPerColumn = Math.ceil(items.length / columnCount);

    const columns = [];
    for (let i = 0; i < columnCount; i++) {
      columns.push(items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }
    return columns;
  };

  return (
    <section className="resume">
      {sortedData.map((item) => {
        const columns = splitIntoColumns(item.description);

        return (
          <div key={item.id} className="resume-item">
            <div className="resume-header">
              <h1 className="title">{item.title}</h1>
              <div className="info">
                <span className="type">
                  {item.type === "education" && "Education"}
                  {item.type === "work" && "Work"}
                  {item.type === "projects" && "Projects"}
                </span>
                <span className="date">{item.date}</span>
              </div>
            </div>

            <div className="resume-details">
              <div className="description-grid">
                {columns.map((column, colIndex) => (
                  <ul key={colIndex} className="description-column">
                    {column.map((point, i) => (
                      <li key={i}>{boldifyTechnologies(point)}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Resume;