// data.ts
import radareImage1 from "../assets/projects/interface-completa.png";
import aiicpImage1 from "../assets/projects/aiicp1.png";


export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescriptions?: string[]; // Optional detailed points
  tags: string[];
  imageUrl: string; // Main display image
  additionalImages?: string[]; // Optional extra images
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean; // Optional flag for featured projects
}

export const projects: Project[] = [
  // Current projects

  // Converted ProjetosAntigos
  {
    id: 1,
    title: "RADARE - Reconciliation and Data Analysis in a Responsive Environment",
    description: "Industrial data reconciliation system ensuring data integrity with scalable architecture.",
    detailedDescriptions: [
      "Developed scalable applications using Python, TypeScript, FastAPI, PostgreSQL, Redis, Docker, and Kubernetes.",
      "Implemented an industrial data reconciliation system ensuring data integrity and accuracy.",
      "Generated monthly savings of R$10,000 through optimized data processes.",
      "Designed architecture handling thousands of reconciliations per minute.",
      "Integrated with multiple data sources including IoT devices and cloud databases."
    ],
    tags: [
      "Python",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes"
    ],
    imageUrl: radareImage1,
    featured: true
  },
  {
    id: 2,
    title: "AIICP - Artificial Intelligence Image Correction Pipeline",
    description: "AI-powered pipeline for correcting and enhancing AI-generated pixel art.",
    detailedDescriptions: [
      "Implemented deep learning-driven upscaling and anti-aliasing techniques.",
      "Flexible system supporting batch processing and real-time workflows.",
      "Integrated advanced image processing with deep learning models."
    ],
    tags: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "PyTorch",
      "FastAPI"
    ],
    imageUrl: aiicpImage1,
    additionalImages: [aiicpImage1],
    githubUrl: "https://github.com/yourusername/aiicp",
    featured: true
  },
  {
    id: 3,
    title: "LENSEG - Lens Segmentation and Frame Recommendation",
    description: "AI-driven platform for personalized eyewear recommendations using facial recognition.",
    detailedDescriptions: [
      "Advanced facial recognition and 3D mapping techniques.",
      "Deep learning engine trained on diverse datasets.",
      "Analyzes facial symmetry and geometry for optimal frame fit."
    ],
    tags: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Dlib",
      "Flask"
    ],
    imageUrl: "/images/default-project.jpg", // Fallback image
    liveUrl: "https://lensegmentation.example.com"
  }
];

// Utility function to get featured projects
export const getFeaturedProjects = () => projects.filter(project => project.featured);

// Utility function to get project by ID
export const getProjectById = (id: number) => projects.find(project => project.id === id);