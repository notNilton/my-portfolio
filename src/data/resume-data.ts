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
    date: '2025',
    title: 'Bachelor’s Degree in Computer Engineering - UFMT',
    shortDescription: 'Academic background in computer engineering.',
    longDescription: 'Undergraduate program focused on software engineering, artificial intelligence, and computational systems optimization.',
    type: 'education'
  },
  {
    id: 2,
    date: '2021-2023',
    title: 'Software Development Intern - SEMA/MT',
    shortDescription: 'Development of environmental management systems.',
    longDescription: 'Developed a data collection and management platform for environmental records using .NET Core 6, processing over 10,000 daily records. Designed an SQL Server database for storing geospatial data and environmental metrics. Integrated government systems via SOAP/REST APIs and optimized ETL processes, reducing processing time by 30%.',
    type: 'work'
  },
  {
    id: 3,
    date: '2024-Present',
    title: 'Solutions Engineer - PGE/MT',
    shortDescription: 'Legal automation and AI-powered systems development.',
    longDescription: 'Designed and implemented a legal automation system using Node.js/TypeScript, integrating workflow processes and reducing processing time by 40%. Developed an AI-powered case summarization module with NLP, eliminating 25 hours of manual review per month. Created an AI-assisted document analysis system (GPT-4), reducing triage time by 65% through embedding validation.',
    type: 'work'
  }
];