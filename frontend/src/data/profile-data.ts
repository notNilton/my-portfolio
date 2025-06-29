import avatarImg from "../assets/profile/avatar.png";

export interface StatusData {
    available: boolean;
    currentProject: string;
}

export interface ProfileData {
    name: string;
    title: string;
    bio: string;
    status: StatusData;
    skills: string[];
    about: string[];
    avatar: string;      
}

export const profileData: ProfileData = {
    name: "Nilton Santos",
    title: "Solutions Designer & Full Stack Developer",
    bio: "I build exceptional digital experiences with modern technologies.",
    about: [
        "With over 7 years of experience in software engineering, I have honed my skills in architecting scalable web applications and intuitive user interfaces. My passion lies in bridging the gap between design and development, ensuring every product I build is both beautiful and performant.",
        "Outside of coding, I am an avid open-source contributor and mentor, participating in several community initiatives. I also enjoy hiking, photography, and exploring the latest trends in AI and machine learning to stay ahead of the curve.",
    ],
    status: {
        available: true,
        currentProject:
            "RADARE - Reconciliation and Data Analysis in a Responsive Environment",
    },
    skills: [
        "React 18",
        "TypeScript 5",
        "Material-UI v5",
        "TanStack Query",
        "Zustand",
        "Framer Motion",
        "Node.js",
        "Express.js",
        "NestJS",
        "FastAPI",
        "Python",
        "PostgreSQL 16",
        "SQLite",
        "Docker",
        "Kubernetes",
        "Git",
    ],
    avatar: avatarImg
};
