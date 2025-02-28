import { FC } from "react";
import { projectList } from "../data/ProjectsData";
import ImageCarousel from "./ImageCarousel"; // Importando o componente do carrossel
import "../styles/ProjectsStyle.css";

const Projects: FC = () => {
  return (
    <section className="projects">
      <div className="project-list">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            {/* <ImageCarousel images={project.images} />  */}
            <div className="project-info">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
