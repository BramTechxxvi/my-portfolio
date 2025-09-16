import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineering Certificate",
    institution: "Semicolon Africa, Lagos",
    year: "2024", // you can adjust this
    description:
      "Completed an intensive program in software engineering with focus on problem-solving, full-stack development, and real-world project delivery.",
  },
  {
    title: "Certification in Business Management",
    institution: "Henley Business School, UK",
    year: "2023", // adjust year
    description:
      "Specialized in business strategy, management principles, and leadership skills to complement technical expertise.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="relative border-l border-primary/40 pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Icon */}
              <div className="absolute -left-3.5 top-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-md">
                <Briefcase size={16} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-muted-foreground text-sm mb-2">
                {exp.institution} • {exp.year}
              </p>
              <p className="text-foreground/80">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
