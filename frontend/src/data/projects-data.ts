// projects-data.ts
import radareImage1 from "../assets/projects/radare_1.png";

import aiicpImage1 from "../assets/projects/aiicp_1.png";
import aiicpImage2 from "../assets/projects/aiicp_2.png";
import aiicpImage3 from "../assets/projects/aiicp_3.png";

import lensegImage1 from "../assets/projects/lenseg_1.png";
import lensegImage2 from "../assets/projects/lenseg_2.png";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  detailedDescriptions?: string[];
  tags: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projectData: ProjectData[] = [
  {
    id: 1,
    title:
      "RADARE – Reconciliation and Data Analysis in a Responsive Environment",
    description:
      "Industrial data reconciliation system ensuring data integrity with scalable architecture.",
    detailedDescriptions: [
      "Developed scalable applications using Python, TypeScript, FastAPI, PostgreSQL, Redis, Docker, and Kubernetes.",
      "Implemented an industrial data reconciliation system ensuring data integrity and accuracy.",
      "Generated monthly savings of R$10 000 through optimized data processes.",
      "Designed architecture handling thousands of reconciliations per minute.",
      "Integrated with multiple data sources including IoT devices and cloud databases.",
    ],
    tags: [
      "Python",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    images: [radareImage1],
    featured: true,
  },
  {
    id: 2,
    title: "AIICP – Artificial Intelligence Image Correction Pipeline",
    description:
      "AI-powered pipeline for correcting and enhancing AI-generated pixel art.",
    detailedDescriptions: [
      "Implemented deep learning–driven upscaling and anti-aliasing techniques.",
      "Built a flexible system supporting both batch processing and real-time workflows.",
      "Integrated advanced image processing with state-of-the-art deep learning models.",
    ],
    tags: ["Python", "TensorFlow", "OpenCV", "PyTorch", "FastAPI"],
    images: [aiicpImage1, aiicpImage2, aiicpImage3],
    githubUrl: "https://github.com/yourusername/aiicp",
    featured: true,
  },
  {
    id: 3,
    title: "LENSEG – Lens Segmentation and Frame Recommendation",
    description:
      "AI-driven platform for personalized eyewear recommendations using facial recognition.",
    detailedDescriptions: [
      "Applied advanced facial recognition and 3D mapping techniques.",
      "Trained a deep learning engine on diverse, real-world datasets.",
      "Analyzes facial symmetry and geometry to recommend optimal frame fit.",
    ],
    tags: ["Python", "OpenCV", "TensorFlow", "Dlib", "Flask"],
    images: [lensegImage1, lensegImage2],
    liveUrl: "https://lensegmentation.example.com",
  },
];

export const getFeaturedProjects = (): ProjectData[] =>
  projectData.filter((proj) => proj.featured);

export const getProjectById = (id: number): ProjectData | undefined =>
  projectData.find((proj) => proj.id === id);
