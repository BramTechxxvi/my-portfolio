import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiFolder, FiAward, FiMail} from 'react-icons/fi';

const navItems = [
    { to: "/", icon: <FiHome />, label: "Home" },
    { to: "/about", icon: <FiUser />, label: "About" },
    { to: "/projects", icon: <FiFolder />, label: "Projects" },
    { to: "/skills", icon: <FiAward />, label: "Skills" },
    { to: "/contact", icon: <FiMail />, label: "Contact" },
];

const BottomNav = () => {
    const location = useLocation();
    return (
        <nav className='fixed bottom-20 left-1/2 -translate-x-1/2 flex flex-row bg-gray-800 shadow-md rounded-full px-16 py-4 gap-10 z-50 min-w-[420px]'>
            {navItems.map((item) => (
                <Link
                    key={item.to}
                    to={item.to}
                    className={`flex flex-col items-center text-base font-bold transition-colors duration-200 ${
                        location.pathname === item.to ? "text-blue-400" : "text-gray-300 hover:text-blue-300"
                    }`}
                >
                    {item.icon}
                    <span className='text-sm mt-1'>{item.label}</span>
                </Link>
            ))}
        </nav>
    );
};

export default BottomNav;