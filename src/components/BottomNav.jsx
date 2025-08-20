import { FiHome, FiUser, FiFolder, FiAward, FiMail} from 'react-icons/fi';

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

const BottomNav = () => {
    return (
    <nav className='fixed bottom-0 left-1/2 -translate-x-1/2 flex flex-row bg-gray-800 shadow-md rounded-full px-4 sm:px-8 py-3 gap-6 sm:gap-10 z-50 w-full max-w-xl'>
            {navItems.map((item) => (
                <a
                    key={item.to}
                    href={item.to}
                    onClick={e => scrollToSection(e, item.to)}
                    className='flex flex-col items-center text-base font-bold transition-colors duration-200 text-gray-300 hover:text-blue-300'
                >
                    {item.icon}
                    <span className='text-sm mt-1'>{item.label}</span>
                </a>
            ))}
        </nav>
    );
};

export default BottomNav;