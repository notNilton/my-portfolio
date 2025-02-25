import radareImage1 from '../assets/projects/interface-completa.png';
import aiicpImage1 from '../assets/projects/comparison.png';
import aiicpImage2 from '../assets/projects/aiicp1.png';
// import aiicpImage3 from '../assets/projects/aiicp2.png';
// import aiicpImage4 from '../assets/projects/aiicp3.png';

export interface Project {
  id: number;
  name: string;
  images: string[];
  description: string;
  technologies: string[];
}

export const projectList: Project[] = [
  {
    id: 1,
    name: 'RADARE - Reconciliation and Data Analysis in a Responsive Environment',
    images: [radareImage1],
    description: 'O RADARE é um sistema avançado de reconciliação de dados industriais, projetado para processar e validar grandes volumes de informações em tempo real. Ele suporta milhares de reconciliações por minuto, garantindo a integridade e consistência dos dados processados. Com algoritmos robustos de correção, o sistema elimina 100% das inconsistências antes da consolidação final. Sua arquitetura responsiva e altamente escalável permite integração com múltiplas fontes de dados, proporcionando um desempenho otimizado para ambientes industriais críticos.',
    technologies: ['Python', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes']
  },
  {
    id: 2,
    name: 'AIICP - Artificial Intelligence Image Correction and Augmentation Pipeline',
    images: [aiicpImage1, aiicpImage2],
    description: 'O AIICP é um pipeline automatizado de inteligência artificial para tratamento, correção e aprimoramento de imagens, especialmente em pixel-art geradas por IA. Ele opera através de um processo em múltiplas etapas, iniciando com pré-processamento e limpeza da imagem, seguido por algoritmos avançados de ajuste de cores, upscaling e reconstrução de detalhes. Utilizando técnicas de Deep Learning, redes neurais convolucionais (CNN) e métodos de aprimoramento com OpenCV, o sistema entrega imagens de alta qualidade, preservando a fidelidade ao estilo original.',
    technologies: ['Python', 'Flask', 'TensorFlow', 'OpenCV', 'PIL', 'NumPy', 'FastAPI', 'PyTorch']
  }
];
