import radareImage1 from "../assets/projects/interface-completa.png";
import aiicpImage1 from "../assets/projects/comparison.png";
import aiicpImage2 from "../assets/projects/aiicp1.png";

export interface Project {
  id: number;
  name: string;
  images: string[];
  description: string[];
  technologies: string[];
}

export const projectList: Project[] = [
  {
    id: 1,
    name: "RADARE - Reconciliation and Data Analysis in a Responsive Environment",
    images: [radareImage1],
    description: [
      "RADARE is an advanced industrial data reconciliation system designed to process and validate large volumes of information in real-time. Built with cutting-edge algorithms, it ensures the highest level of accuracy in industrial data processing. The system is tailored to industries that handle vast and complex datasets, providing a robust infrastructure capable of detecting, analyzing, and resolving discrepancies in data streams with near-instantaneous feedback. Its architecture is optimized for mission-critical environments, where even minor data inconsistencies can lead to significant operational and financial consequences.",
      "One of RADARE’s key advantages is its ability to support thousands of reconciliations per minute without compromising speed or reliability. By utilizing parallel processing and distributed computing techniques, the system scales effortlessly to handle high workloads while maintaining low latency. This high-performance reconciliation engine is particularly beneficial for sectors like manufacturing, energy, and logistics, where real-time decision-making depends on precise and reliable data streams. Additionally, the system’s built-in monitoring tools allow for continuous oversight, ensuring that any potential anomalies are detected and corrected before they impact downstream processes.",
      "With a powerful suite of correction algorithms, RADARE eliminates 100% of inconsistencies before final consolidation, reducing the risk of data corruption and ensuring compliance with industry regulations. These algorithms employ machine learning techniques to adapt to patterns in erroneous data, enabling the system to improve its accuracy over time. By proactively identifying root causes of discrepancies, RADARE not only corrects errors but also helps organizations optimize their data collection processes, minimizing future inconsistencies. The system’s audit trails and historical tracking capabilities further enhance accountability, making it easier for organizations to trace and verify data adjustments when necessary.",
      "The system’s responsive and highly scalable architecture allows seamless integration with multiple data sources, including IoT devices, SCADA systems, cloud databases, and enterprise resource planning (ERP) platforms. RADARE’s modular design ensures compatibility with both legacy and modern IT infrastructures, making deployment flexible across diverse industrial settings. By providing optimized performance, automated workflows, and intelligent data reconciliation, RADARE empowers organizations to make data-driven decisions with confidence, ultimately improving operational efficiency and reducing costs. As industries increasingly rely on real-time analytics, RADARE serves as a crucial component in ensuring data accuracy and reliability at scale.",
    ],
    technologies: [
      "Python",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: 2,
    name: "AIICP - Artificial Intelligence Image Correction and Augmentation Pipeline",
    images: [aiicpImage1, aiicpImage2],
    description: [
      "AIICP is an advanced artificial intelligence pipeline designed to process, correct, and enhance images with exceptional accuracy, particularly focusing on AI-generated pixel art. The system is built to handle a variety of image imperfections, including artifacts, noise, and distortions that commonly occur in AI-generated visual content. By leveraging a combination of deep learning and classical image processing techniques, AIICP enhances image quality while maintaining the artistic intent of the original piece. This makes it an essential tool for artists, game developers, and content creators who rely on high-fidelity pixel art and digital artwork.",
      "The pipeline follows a structured multi-step process to ensure optimal enhancement results. It begins with an initial image pre-processing stage, where noise reduction and normalization techniques are applied to remove unwanted artifacts and improve color consistency. Advanced color adjustment algorithms then analyze the image’s color palette, ensuring smoother transitions and correcting oversaturation or desaturation effects. The system also employs sophisticated anti-aliasing techniques to refine edges and maintain the crisp, sharp look required for high-quality pixel art. Each of these steps is dynamically adjusted based on the input image characteristics, making the pipeline highly adaptable to different artistic styles.",
      "One of the key innovations of AIICP is its deep learning-driven upscaling and detail reconstruction modules. By utilizing convolutional neural networks (CNNs) trained on vast datasets of pixel art and digitally generated images, the system intelligently predicts and reconstructs missing details with remarkable precision. Unlike traditional upscaling methods that often introduce blurring or distortion, AIICP enhances resolution while preserving the integrity of small-scale details. This is particularly useful in game development, where low-resolution sprites need to be upscaled for modern displays without losing their original charm. Additionally, the pipeline integrates OpenCV-based enhancement methods to fine-tune textures and patterns, further improving the visual quality of the final output.",
      "AIICP is designed with flexibility and scalability in mind, allowing users to customize processing parameters based on their specific needs. Whether applied to batch image processing, real-time rendering pipelines, or automated workflows, the system delivers consistent and high-quality results. With support for various image formats and seamless integration into existing digital art production environments, AIICP provides a powerful solution for AI-assisted image enhancement. By merging deep learning capabilities with advanced image processing techniques, AIICP represents a cutting-edge approach to refining and elevating AI-generated visual content, ensuring that every image maintains its intended artistic integrity."
    ],    
    technologies: [
      "Python",
      "Flask",
      "TensorFlow",
      "OpenCV",
      "PIL",
      "NumPy",
      "FastAPI",
      "PyTorch",
    ],
  },
  {
    id: 3,
    name: "Lensegmentation Platform",
    images: [],
    description: [
      "Lensegmentation Platform is a state-of-the-art AI-driven system designed to revolutionize the eyewear industry by providing highly accurate, personalized recommendations for glasses based on facial structure analysis. By leveraging sophisticated artificial intelligence models, the platform identifies key facial features and evaluates their proportions to determine the most suitable lens and frame for each individual. This process ensures not only aesthetic harmony but also functional comfort, helping users select eyewear that enhances both appearance and vision quality. The platform's precision-driven approach makes it an invaluable tool for optometrists, eyewear retailers, and online stores looking to offer a more personalized shopping experience.",
      "Using a combination of advanced facial and eye recognition techniques, the system conducts an in-depth analysis of facial symmetry, eye positioning, and overall geometry to generate highly customized recommendations. High-resolution imaging and 3D facial mapping technologies allow the platform to capture intricate details of the user's face, ensuring an accurate assessment of shape compatibility with different eyewear styles. The system also considers factors such as nose bridge width, temple length, and frame curvature to enhance the overall fit and comfort of the selected glasses. This data-driven approach minimizes guesswork, reducing the likelihood of poor-fit purchases, which is a common challenge in both physical and online eyewear shopping.",
      "At the core of the platform lies a deep learning engine trained on vast datasets of diverse facial structures, eyewear styles, and user preferences. Through continuous learning and model optimization, the AI refines its recommendations over time, adapting to emerging fashion trends and individual style preferences. The convolutional neural networks (CNNs) used in the system are capable of detecting micro-expressions and subtle facial attributes that traditional recommendation systems overlook. Additionally, the integration of reinforcement learning mechanisms allows the platform to improve its predictive capabilities based on real-world feedback from users and optometrists, enhancing the accuracy of its frame selection process.",
      "The project is currently owned by a private company and remains in a pre-launch phase, undergoing extensive testing to ensure optimal performance and reliability. Due to proprietary constraints, no images or public demonstrations of the system will be available until its official market release. However, preliminary evaluations indicate that the platform has the potential to disrupt the eyewear industry by introducing a seamless, AI-powered solution for frame selection. As digital transformation continues to reshape retail experiences, the Lensegmentation Platform is positioned to bridge the gap between technological innovation and personalized fashion, offering a next-generation solution for eyewear recommendation."
    ],  
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Deep Learning",
      "Dlib",
      "Flask",
      "FastAPI",
    ],
  },
];
