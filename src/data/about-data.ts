export interface About {
  title: string;
  description: string;
  links: string[];
}

export const aboutData: About = {
  title: "About Me",
  description:
    "I am a developer passionate about technology and innovation, with experience in backend development and building efficient APIs. Always seeking new challenges to expand my knowledge and contribute to impactful projects. This website was developed using TypeScript, React, and pure CSS, without relying on external UI frameworks beyond React's default capabilities. The design and responsiveness were implemented manually to ensure full customization. The project is hosted on Firebase, utilizing its cloud hosting services for scalability and seamless deployment.",
  links: [
    "https://github.com/notNilton",
    "https://www.linkedin.com/in/notnilton/",
    "https://leetcode.com/u/notNilton/",
  ],
};
