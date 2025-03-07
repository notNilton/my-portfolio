// about-data.ts

export interface About {
  title: string;
  description: string;
  links: string[];
  influences: string[];
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
  influences: [
    "Our Moloch",
    "1500 Archers on a 28.8: Network Programming in Age of Empires",
    "Hammock Driven Development",
    "Simple Made Easy",
    "Surely You're Joking, Mr. Feynman!",
    "Litany for Money: A Deeper Economy",
    "I Will Fucking Dropkick You If You Use That Spreadsheet",
    "I Will Fucking Piledrive You If You Mention AI Again",
    "Simulacra and Simulation",
    "Napoleon's Buttons",
  ],
};
