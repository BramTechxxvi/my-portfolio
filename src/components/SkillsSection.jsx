import {useState} from 'react'
import cn from '../lib/utils';

const skills = [
  //Frontend
  {name: "HTML/CSS", level: 82, category: "frontend"},
  {name: "JavaScript", level: 95, category: "frontend"},
  {name: "React.js", level: 92, category: "frontend"},
  {name: "TypeScript", level: 89, category: "frontend"},
  {name: "Tailwind CSS", level: 87, category: "frontend"},
  {name: "Next.js", level: 91, category: "frontend"},

  //BackEnd
  {name: "Java", level: 82, category: "backend"},
  {name: "Python", level: 82, category: "backend"},
  {name: "Node.js", level: 82, category: "backend"},
  {name: "Go", level: 82, category: "backend"},
  {name: "", level: 82, category: "backend"},
  {name: "HTML/CSS", level: 82, category: "backend"},
  {name: "HTML/CSS", level: 82, category: "backend"},
 
  
  // Tools
  {name: "MongoDB", level: 82, category: "backend"},
  {name: "MySQL", level: 82, category: "backend"},
  {name: "PostgresQL", level: 82, category: "backend"},
  {name: "Docker", level: 82, category: "backend"},
  {name: "Git", level: 82, category: "backend"},
  {name: "GitHub", level: 82, category: "backend"},

]

const categories = ["all", "frontend", "backend", "tools % technologies"];

const SkillsSection = () => {

    const [activeCategory, setActiveCategorty] = useState("all");

    return (
      <section>
        
      </section>
    )


}

  return (
  <section id="skills" 
  className='py-24 px-4 relative bg-secondary/30'> 

  <div className="container mx-auto max-w-5xl">
    <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
      My <span className="text-primary"> Skills</span>
    </h2>

    <div className='flex flex-wrap justify-center mb-12 gap-4'>
      {categories.map((category, index) => (
        <button
        key={index}
        onClick={() => setActiveCategorty(category)}
        className={cn(
          "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
          activeCategory === category 

          const skillsGroups = [
            {
              group: "Programming Languages",
              skills: [
                { name: "JavaScript", level: 95 },
                { name: "TypeScript", level: 89 },
                { name: "Python", level: 82 },
                { name: "Java", level: 82 },
                { name: "Go", level: 82 },
              ]
            },
            {
              group: "Backend Frameworks",
              skills: [
                { name: "Node.js", level: 82 },
                { name: "Express.js", level: 80 },
                { name: "Django", level: 78 },

                const skillsGroups = [
                  {
                    group: "Programming Languages",
                    skills: [
                      { name: "JavaScript", level: 95 },
                      { name: "TypeScript", level: 89 },
                      { name: "Python", level: 82 },
                      { name: "Java", level: 82 },
                      { name: "Go", level: 82 },
                    ]
                  },
                  {
                    group: "Backend Frameworks",
                    skills: [
                      { name: "Node.js", level: 82 },
                      { name: "Express.js", level: 80 },
                      { name: "Django", level: 78 },
                      { name: "Spring Boot", level: 75 },
                      { name: "Next.js", level: 91 },
                    ]
                  },
                  {
                    group: "Databases",
                    skills: [
                      { name: "MongoDB", level: 82 },
                      { name: "MySQL", level: 82 },
                      { name: "PostgreSQL", level: 82 },
                      { name: "Redis", level: 75 },
                    ]
                  },
                  {
                    group: "Cloud & DevOps",
                    skills: [
                      { name: "Docker", level: 82 },
                      { name: "Git", level: 82 },
                      { name: "GitHub", level: 82 },
                      { name: "AWS", level: 70 },
                      { name: "Vercel", level: 70 },
                    ]
                  },
                  {
                    group: "Security & OAuth",
                    skills: [
                      { name: "JWT", level: 75 },
                      { name: "OAuth2", level: 70 },
                      { name: "Helmet.js", level: 70 },
                      { name: "OWASP", level: 65 },
                    ]
                  },
                  {
                    group: "Testing & Tools",
                    skills: [
                      { name: "Jest", level: 80 },
                      { name: "Mocha", level: 75 },
                      { name: "Cypress", level: 70 },
                      { name: "Postman", level: 85 },
                    ]
                  },
                ];

                const SkillsSection = () => {
                  return (
                    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
                      <div className="container mx-auto max-w-5xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                          My <span className="text-primary"> Skills</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {skillsGroups.map((groupObj, idx) => (
                            <div key={idx} className="bg-card rounded-xl shadow p-6 flex flex-col items-center">
                              <h3 className="text-xl font-semibold mb-4 text-primary text-center">{groupObj.group}</h3>
                              <ul className="w-full">
                                {groupObj.skills.map((skill, i) => (
                                  <li key={i} className="flex justify-between items-center py-2 border-b border-border last:border-none">
                                    <span className="font-medium text-foreground">{skill.name}</span>
                                    <span className="text-primary font-semibold">{skill.level}%</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  );
                }};

                export default SkillsSection;
