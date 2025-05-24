import { FC } from "react";
import { projectList } from "../data/project-data";
import ImageCarousel from "../components/ImageCarousel";
import "../styles/project-style.css";

const Projects: FC = () => {
  // List of technologies to automatically bold
  const TECHNOLOGIES = [
    // Languages
    'Python', 'TypeScript', 'JavaScript', 
    // Frameworks/Libraries
    'FastAPI', 'TensorFlow', 'OpenCV', 'PyTorch', 'Flask', 'React',
    // Databases
    'PostgreSQL', 'Redis', 
    // Infrastructure
    'Docker', 'Kubernetes', 
    // AI/ML
    'Deep Learning', 'NLP', 'Computer Vision',
    // Other tech terms
    'RESTful APIs', 'REST API', 'SCADA', 'ERP', 'IoT',
    // Libraries
    'PIL', 'NumPy', 'Dlib'
  ];

  // Function to boldify technologies in text
  const boldifyTechnologies = (text: string) => {
    // Create regex pattern that matches any technology (case insensitive)
    const pattern = new RegExp(`(${TECHNOLOGIES.join('|')})`, 'gi');
    
    // Split text and wrap matches in strong tags
    const parts = text.split(pattern);
    
    return parts.map((part, index) => 
      TECHNOLOGIES.some(tech => tech.toLowerCase() === part.toLowerCase())
        ? <strong key={index} className="bold-text">{part}</strong>
        : part
    );
  };

  return (
    <section className="projects">
      {projectList.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-info">
            <h1 className="project-title">{project.name}</h1>
            <ImageCarousel images={project.images} />
            <div className="project-description">
              {project.description.map((paragraph, index) => (
                <p key={index}>
                  {boldifyTechnologies(paragraph)}
                </p>
              ))}
            </div>
            <h2 className="technologies-title">Technologies</h2>
            <ul className="project-tech">
              {project.technologies.map((tech, index) => (
                <li key={index}>
                  <strong>{tech}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;