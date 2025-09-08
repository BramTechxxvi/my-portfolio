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
  {name: "Pyhton", level: 82, category: "backend"},
  {name: "Node.js", level: 82, category: "backend"},
  {name: "HTML/CSS", level: 82, category: "backend"},
  {name: "HTML/CSS", level: 82, category: "backend"},
  {name: "HTML/CSS", level: 82, category: "backend"},
  {name: "HTML/CSS", level: 82, category: "backend"},
  {name: "HTML/CSS", level: 82, category: "backend"},
  {name: "HTML/CSS", level: 82, category: "backend"},
  {name: "HTML/CSS", level: 82, category: "backend"},
  
  {name: "HTML/CSS", level: 82, category: "backend"}
]

const SkillsSection = () => {
  return (
  <section id="skills" 
  className='py-24 px-4 relative bg-secondary/30'> 

  <div className="container mx-auto max-w-5xl">
    <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
      My <span> Skills</span>
    </h2>

  </div>
  </section>
  )
}

export default SkillsSection
