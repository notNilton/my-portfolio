import radareImage from '../assets/projects/projectB.webp';
import aiicpImage from '../assets/projects/projectB.webp';

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
    name: 'RADARE - Reconciliation and Data Analysis in a Responsive Environment',
    image: radareImage,
    description: 'Sistema Sistema de reconciliação de dados industriais, garantindo integridade e eficiência na análise de grandes volumes de dados.de reconciliação de dados industriais, garantindo integridade e eficiência na análise de grandes volumes de dados.',
    technologies: ['Python', 'TypeScript', 'SQLite']
  },
  {
    id: 2,
    name: 'AIICP - Artificial Intelligence Image Correction and Augmentation Pipeline',
    image: aiicpImage,
    description: 'Pipeline automatizado para correção e aprimoramento de imagens pixel-art geradas por Inteligência Artificial.Sistema de reconciliação de dados industriais, garantindo integridade e eficiência na análise de grandes volumes de dados.',
    technologies: ['Python', 'Flask', 'OpenCV', 'PIL']
  }
];
