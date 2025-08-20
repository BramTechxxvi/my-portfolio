import { FiCode, FiDatabase, FiTool, FiGlobe } from 'react-icons/fi';

const skills = [
  {
    category: 'Frontend',
    icon: <FiGlobe className="text-blue-500 text-2xl" />,
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    icon: <FiDatabase className="text-green-500 text-2xl" />,
    items: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    category: 'Tools',
    icon: <FiTool className="text-yellow-500 text-2xl" />,
    items: ['Git', 'VS Code', 'Postman', 'Figma'],
  },
  {
    category: 'Other',
    icon: <FiCode className="text-purple-500 text-2xl" />,
    items: ['Problem Solving', 'Teamwork', 'Agile'],
  },
];

const Skills = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full py-12 px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.category} className="bg-white bg-opacity-10 rounded-xl shadow p-6 flex flex-col items-center">
              <div className="mb-2">{group.icon}</div>
              <h3 className="font-semibold text-lg mb-3">{group.category}</h3>
              <ul className="flex flex-wrap gap-2 justify-center">
                {group.items.map((skill) => (
                  <li key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;