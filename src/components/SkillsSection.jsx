
const SkillsSection = () => {
  const skillsData = {
    "Programming Languages": [
      { name: "Java", level: 91 },
      { name: "JavaScript", level: 82 },
      { name: "TypeScript", level: 80 },
      { name: "Python", level: 85 },
      { name: "Go", level: 80 },
    ],

    "Backend Frameworks": [
      { name: "Spring boot", level: 90},
      { name: "Node.js", level: 85},
      { name: "Express.js", level: 83},
      { name: "Django", level: 87},
      { name: "RESTful API's"},
    ],

    "Databases": [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Redis", level: 75 },
    ],

    "Cloud & DevOps": [
      { name: "Docker", level: 82 },
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "CI/CD", level: 78 },
      { name: "AWS", level: 70 },
    ],
  
    "Security & Auth": [
      { name: "JWT Authentication", level: 80 },
      { name: "API Security", level: 78 },
      { name: "Basic Auth", level: 75 },
    ],
  
    "Testing & Tools": [
      { name: "Jest", level: 82 },
      { name: "JUnit", level: 79 },
      { name: "Postman", level: 88 },
      { name: "PyTest", level: 81 },
    ],
  }

  return (
    <section id="skills" 
    className="py-24 px-4 relative bg-secondary/30">
      <div className='container mx-auto max-w-6xl'>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
            key={category}
            className='bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'
            >
              <h3 className='text-xl font-semibold mb-4 text-primary'>
                {category}
              </h3>

              <div className='space-y-4'>
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className='flex justify-between mb-1'>
                      <span className='text-sm font-medium'>{skill.name}</span>
                      <span className='text-sm text-muted-foreground'>{skill.level}%</span>
                    </div>

                    <div className='w-full bg-secondary/50 rounded-full h-2 overflow-hidden'>
                      <div 
                      className='bg-primary h-2 rounded-full'
                      style={{ width: skill.level + "%" }}
                      />
                    </div>
                  </div> 
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )

}

export default SkillsSection;
