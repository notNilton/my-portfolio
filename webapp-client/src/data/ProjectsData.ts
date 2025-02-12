import projectA from '../assets/projects/projectA.jpg';
import projectB from '../assets/projects/projectB.webp';
import projectC from '../assets/projects/projectC.webp';

export interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  technologies: string[];
}

export const projectList: Project[] = [
  {
    id: 1,
    name: 'Projeto A',
    image: projectA,
    description: 'Breve descrição do Projeto A.',
    technologies: ['React', 'TypeScript', 'CSS']
  },
  {
    id: 2,
    name: 'Projeto B',
    image: projectB,
    description: 'Breve descrição do Projeto B.',
    technologies: ['JavaScript', 'HTML', 'CSS']
  },
  {
    id: 3,
    name: 'Projeto C',
    image: projectC,
    description: 'Breve descrição do Projeto C.',
    technologies: ['Node.js', 'Express', 'MongoDB']
  }
];
