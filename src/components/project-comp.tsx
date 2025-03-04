import { FC } from "react";
import { projectList } from "../data/project-data";
import ImageCarousel from "./image-carousel"; // Importando o componente do carrossel
import "../styles/project-style.css";

const Projects: FC = () => {
  return (
    <section className="projects">
      <div className="project-list">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            {/* <ImageCarousel images={project.images} />  */}
            <div className="project-info">
              <h2 className="project-title">{project.name}</h2>
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
