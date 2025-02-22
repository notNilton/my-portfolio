export interface CurriculumPhase {
  id: number;
  date: string;
  title: string;
  shortDescription: string;
  longDescription: string;
}

export const curriculumData: CurriculumPhase[] = [
  {
    id: 1,
    date: '2018-2020',
    title: 'Ensino Técnico em Informática',
    shortDescription: 'Curso técnico voltado para desenvolvimento e redes.',
    longDescription: 'Durante esse período, adquiri conhecimentos em programação, manutenção de computadores, redes de computadores e banco de dados, além de desenvolver projetos práticos em diversas tecnologias.'
  },
  {
    id: 2,
    date: '2020-2024',
    title: 'Bacharelado em Ciência da Computação',
    shortDescription: 'Graduação com foco em desenvolvimento e pesquisa.',
    longDescription: 'Aprofundamento em algoritmos, estruturas de dados, desenvolvimento de software, inteligência artificial e segurança da informação. Trabalhei em projetos acadêmicos e desenvolvi um sistema de monitoramento como TCC.'
  },
  {
    id: 3,
    date: '2023-Presente',
    title: 'Desenvolvedor Backend',
    shortDescription: 'Atuação profissional como desenvolvedor backend.',
    longDescription: 'Desenvolvimento de APIs utilizando Node.js e Flask, integração com bancos de dados relacionais e NoSQL, implementação de testes automatizados e práticas de DevOps para CI/CD.'
  }
];
