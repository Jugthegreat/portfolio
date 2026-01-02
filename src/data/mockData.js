import React from 'react'; 
import { Layers, Terminal, Database, Code, Server, Layout, Smartphone } from 'lucide-react';

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Tech Startup Inc.",
    location: "Jakarta, Indonesia",
    period: "Aug 2025 - Present",
    type: "Full-time",
    description: "Developing responsive web applications using React.js and Tailwind CSS. Collaborating with UI/UX designers to implement pixel-perfect interfaces.",
    skills: ["React", "Tailwind", "Figma", "Git"]
  },
  {
    id: 2,
    role: "Laboratory Assistant",
    company: "University Computer Lab",
    location: "Depok, Indonesia",
    period: "Jan 2024 - Jul 2024",
    type: "Part-time",
    description: "Assisted students with C++ and Java programming assignments. Maintained lab equipment and software environments.",
    skills: ["C++", "Java", "Teaching", "Linux"]
  }
];

export const EDUCATION_DATA = [
  {
    id: 1,
    degree: "Bachelor of Informatics Engineering",
    school: "Universitas Teknologi",
    year: "2023 - 2027 (Expected)",
    grade: "GPA: 3.85/4.00",
    desc: "Focusing on Software Engineering and Artificial Intelligence. Active member of the Computer Science Student Association."
  },
  {
    id: 2,
    degree: "Full Stack Web Development Bootcamp",
    school: "NF Academy",
    year: "2024",
    grade: "Certified",
    desc: "Intensive 6-month bootcamp covering MERN Stack (MongoDB, Express, React, Node.js)."
  }
];

export const CERTIFICATES_DATA = [
  { id: 1, title: "Google UX Design Professional Certificate", issuer: "Coursera", date: "Mar 2024", credentialId: "ID: 123456" },
  { id: 2, title: "React (Basic) Certificate", issuer: "HackerRank", date: "Jan 2024", credentialId: "ID: ABC-DEF" },
  { id: 3, title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", date: "Dec 2023", credentialId: "ID: AWS-789" },
  { id: 4, title: "JavaScript Algorithms and Data Structures", issuer: "FreeCodeCamp", date: "Nov 2023", credentialId: "ID: FCC-JS" }
];

export const TECH_STACK_DATA = [
  { category: "Frontend", icon: <Layout size={20}/>, items: ["React.js", "Vue.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", icon: <Server size={20}/>, items: ["Node.js", "Express", "Laravel", "Go"] },
  { category: "Database & Cloud", icon: <Database size={20}/>, items: ["MongoDB", "MySQL", "Firebase", "AWS"] },
  { category: "Tools", icon: <Code size={20}/>, items: ["Git", "Docker", "Figma", "Postman"] }
];