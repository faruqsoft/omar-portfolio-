import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaNpm,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiVite } from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "GitHub", icon: FaGithub },
      { name: "NPM", icon: FaNpm },
      { name: "Figma", icon: FaFigma },
    ],
  },
];
