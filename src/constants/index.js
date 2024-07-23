import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate software developer with a knack for crafting robust and scalable applications. With hands-on experience, I have honed my skills in various technologies including Swift, Python, and C++. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer with a passion for creating efficient and user-friendly applications. With professional experience, I have worked with a variety of technologies, including Swift, Python, and C++. My journey in software development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "24 June 2024 - 19 July 2024",
    role: "iOS Developer Intern",
    company: "Infosys, Mysore",
    description: `Contributed to the development of a Training and Learning Management System (TLMS) iOS Application. Utilized Swift, Xcode, SwiftUI, Core Data, and design patterns for app development. Engaged in Agile project management using Jira.`,
    technologies: ["Swift", "Xcode", "SwiftUI", "Core Data"],
  },
];

export const PROJECTS = [
  {
    title: "Alpha AI - Personal Assistant Model",
    image: project1,
    description:
      "Implemented web browsing, information retrieval, file handling, system actions, and more using Python.",
    technologies: ["Python", "speech_recognition", "pyttsx3", "NLP"],
  },
  {
    title: "Sunetra - iOS App for Detecting and Managing Strabismus",
    image: project2,
    description:
      "Collaboratively designed and implemented an iOS app featuring user authentication, real-time ML image analysis, and a game list for therapeutic exercises.",
    technologies: ["Swift", "Xcode", "UIKit", "Core Data"],
  },
  {
    title: "Flight Delay Prediction Using Machine Learning",
    image: project3,
    description:
      "Published a research paper on predicting flight delays using machine learning models.",
    technologies: ["Machine Learning", "Python"],
  },
  {
    title: "Sentiment Analysis Model",
    image: project4,
    description:
      "Designed and deployed a sentiment analysis model to classify news headlines.",
    technologies: ["Python", "NLP", "Machine Learning"],
  },
];

export const CONTACT = {
  email: "anmolranjan1@gmail.com",
};
