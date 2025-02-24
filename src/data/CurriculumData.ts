export interface CurriculumPhase {
  id: number;
  date: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  type: 'education' | 'projects' | 'work';
}

export const curriculumData: CurriculumPhase[] = [
  {
    id: 1,
    date: '2021-2023',
    title: 'Estagiário em Desenvolvimento de Software - SEMA/MT',
    shortDescription: 'Desenvolvimento de sistemas para gestão ambiental.',
    longDescription: 'Desenvolvi uma plataforma de coleta e gestão de dados ambientais utilizando .NET Core 6, processando mais de 10 mil registros diários. Modelei banco de dados SQL Server para armazenamento de dados geoespaciais e métricas ambientais. Integrei sistemas governamentais via APIs SOAP/REST e otimizei processos ETL, reduzindo tempo de processamento em 30%.',
    type: 'work'
  },
  {
    id: 2,
    date: '2024-Presente',
    title: 'Engenheiro de Soluções - PGE/MT',
    shortDescription: 'Automação jurídica e desenvolvimento de sistemas de IA.',
    longDescription: 'Projetei e implementei um sistema de automação jurídica com Node.js/TypeScript, integrando fluxos de trabalho e reduzindo o tempo de processamento em 40%. Desenvolvi um módulo de sumarização automática de processos com NLP, eliminando 25 horas mensais de revisão manual. Criei um sistema de análise documental assistida por IA (GPT-4), reduzindo o tempo de triagem em 65% com validação por embeddings.',
    type: 'work'
  },
  {
    id: 3,
    date: '2025',
    title: 'Graduação em Engenharia de Computação - UFMT',
    shortDescription: 'Formação acadêmica em engenharia de computação.',
    longDescription: 'Graduação focada em engenharia de software, inteligência artificial e otimização de sistemas computacionais.',
    type: 'education'
  },
  {
    id: 4,
    date: '12 meses',
    title: 'Projeto RADARE',
    shortDescription: 'Sistema de Reconciliação de Dados Industriais.',
    longDescription: 'Desenvolvi um sistema de reconciliação de dados industriais, garantindo integridade e precisão dos dados. Criei uma interface interativa e APIs para integração com outros sistemas. Otimizei processos, gerando economia de R$10.000 mensais.',
    type: 'projects'
  },
  {
    id: 5,
    date: '6 meses',
    title: 'Projeto AIICP',
    shortDescription: 'Pipeline para correção de imagens pixel-art geradas por I.A.',
    longDescription: 'Desenvolvi um pipeline automatizado para correção de imagens utilizando Python, Flask, OpenCV e PIL, ajustando parâmetros e integrando com APIs externas.',
    type: 'projects'
  }
];
