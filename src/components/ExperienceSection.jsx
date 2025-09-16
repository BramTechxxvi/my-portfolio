import { Description } from '@radix-ui/react-toast';
import React from 'lucide-react';

const experiences = [
    {
        title: "Software Engineering Trainee",
        institution: "Semicolon Africa, Lagos",
        year: "2024", 
    },
    {
        title: "Certification in Business Management",
        institution: "Henley Business School, UK",
        year: "2025",
    }

]

const ExperienceSection = () => {
  return (
    <section
    id="experience"
    className='container max-w-5xl mx-auto py-24 px-4 bg-secondary/30 relative'>
        <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My <span className="text-primary">Experience</span>
            </h2>


            <div className='relative border-l border-primary/40 pl-6 space-y-12'>
                {experiences.map((exp, index) => (
                    <div key={index} className='relative'>
                        <div className='absolute -left-3.5 top-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-md'>
                            <Briefcase size={16}/>
                        </div>

                        <h3 className='text-xl font-semibold'>{exp.title}</h3>
                        <p className='text-muted-foreground text-sm mb-2'>
                            {exp.institution} • {exp.year}
                        </p>
                    </div>    
                ))}
            </div>
        </div>
    </section>
  )
}

export default ExperienceSection;
