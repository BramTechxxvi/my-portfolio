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

          ))}
        </div>
      </div>

    </section>
  )

}

export default SkillsSection;
