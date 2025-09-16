import { Code, Server, Database, Cloud, ShieldCheck, FlaskConical } from 'lucide-react';

const SkillsSection = () => {
  
  const skillsData = {
    "Programming Languages": {
      icon: <Code className="inline-block mr-2 text-primary" size={22} />, 
      skills: [
        { name: "Java", level: 91 },
        { name: "JavaScript", level: 82 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 85 },
        { name: "Go", level: 80 },
      ]
    },
    "Backend Frameworks": {
      icon: <Server className="inline-block mr-2 text-primary" size={22} />,
      skills: [
        { name: "Spring boot", level: 90},
        { name: "Node.js", level: 85},
        { name: "Express.js", level: 83},
        { name: "Django", level: 87},
        { name: "RESTful API's"},
      ]
    },
    "Databases": {
      icon: <Database className="inline-block mr-2 text-primary" size={22} />,
      skills: [
        { name: "MongoDB", level: 82 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 75 },
      ]
    },
    "Cloud & DevOps": {
      icon: <Cloud className="inline-block mr-2 text-primary" size={22} />,
      skills: [
        { name: "Docker", level: 82 },
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "CI/CD", level: 78 },
        { name: "AWS", level: 70 },
      ]
    },
    "Security & Auth": {
      icon: <ShieldCheck className="inline-block mr-2 text-primary" size={22} />,
      skills: [
        { name: "JWT Authentication", level: 80 },
        { name: "API Security", level: 78 },
        { name: "Basic Auth", level: 75 },
      ]
    },
    "Testing & Tools": {
      icon: <FlaskConical className="inline-block mr-2 text-primary" size={22} />,
      skills: [
        { name: "Jest", level: 82 },
        { name: "JUnit", level: 79 },
        { name: "Postman", level: 88 },
        { name: "PyTest", level: 81 },
      ]
    },
  }