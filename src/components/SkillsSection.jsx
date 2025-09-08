import React from 'react'

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

const SkillsSection = () => {
  return (
  <section id="skills" 
  className='py-24 px-4 relative bg-secondary/30'> 

  <div className="container mx-auto max-w-5xl">
    <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
      My <span className="text-primary"> Skills</span>
    </h2>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {skills.map((skill, index) => (
        <div
        key={index} 
        className="bg-card p-6 rounded-lg shadow-xs card-hover">

          <div className='text-left mb-4'>
            <h3 className='text-lg font-semibold mb-2'>
              {skill.name}
            </h3>
          </div>

          <div className='w-full bg-secondary/50 rounded-full h-2 overflow-hidden'>
            <div 
            className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out' 
            style={{ width: skills.level + "%" }}/>
          </div>
        </div>
      ))}
    </div>

  </div>
  </section>
  )
}

export default SkillsSection
