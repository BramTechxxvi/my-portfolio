import cn from '../lib/utils';

const SkillsSection = () => {

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
