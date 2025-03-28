// project-comp.tsx

import { FC } from "react";
import { projectList } from "../data/project-data";
import ImageCarousel from "../components/ImageCarousel";
import "../styles/project-style.css";

const Projects: FC = () => {
  // Função para formatar texto com negrito
  const formatTextWithBold = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  return (
    <section className="projects">
      {/* <div className="project-list"> */}
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-info">
              <h1 className="project-title">{project.name}</h1>
              <ImageCarousel images={project.images} />
              <div className="project-description">
                {project.description.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: formatTextWithBold(paragraph),
                    }}
                  />
                ))}
              </div>
              <h1>Techonlogies</h1>
              <ul className="project-tech">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      {/* </div> */}
    </section>
  );
};

export default Projects;