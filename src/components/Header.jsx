
import { FiHome, FiUser, FiFolder, FiAward, FiMail, FiDownload } from "react-icons/fi";


const navItems = [
  { to: "#hero", icon: <FiHome />, label: "Home" },
  { to: "#about", icon: <FiUser />, label: "About" },
  { to: "#projects", icon: <FiFolder />, label: "Projects" },
  { to: "#skills", icon: <FiAward />, label: "Skills" },
  { to: "#contact", icon: <FiMail />, label: "Contact" },
];

const scrollToSection = (e, to) => {
  e.preventDefault();
  const section = document.querySelector(to);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  return (
    <header className="w-full px-8 py-5 sm:px-12 sm:py-7 flex flex-col sm:flex-row justify-between items-center bg-gray-900 text-white">
      <div className="flex items-center gap-2 mb-4 sm:mb-0">
        <span className="relative w-3 h-3 rounded-full bg-green-600 animate-pulse"></span>
        <h5 className="font-bold text-lg font-sans">Open to work</h5>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <nav className="flex gap-4 sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={item.to}
              onClick={e => scrollToSection(e, item.to)}
              className="flex items-center gap-1 text-base font-bold transition-colors duration-200 text-gray-300 hover:text-blue-300"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <button className="relative px-4 py-2 bg-blue-400 rounded-md text-black font-semibold text-base font-sans overflow-hidden flex items-center justify-center gap-2 group min-w-[140px]">
          <span className="group-hover:opacity-0 transition-opacity duration-300">Download CV</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiDownload />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;


