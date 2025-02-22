import { FC } from 'react';
import { projectList } from '../data/ProjectsData';
import '../styles/ProjectsStyle.css';

const Projects: FC = () => {
  return (
    <section className="projects">
      <h2>Projetos</h2>
      <div className="project-list">
        {projectList.map(project => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
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
