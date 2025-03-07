import { FC } from "react";
import { projectList } from "../data/project-data";
import ImageCarousel from "./image-carousel";
import "../styles/project-style.css";

const Projects: FC = () => {
  return (
    <section className="projects">
      <div className="project-list">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-info">
              <h1 className="project-title">{project.name}</h1>
              <ImageCarousel images={project.images} />
              <div className="project-description">
                {project.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
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
