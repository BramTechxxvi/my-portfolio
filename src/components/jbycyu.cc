// components/BottomNav.jsx
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiFolder, FiAward, FiMail } from "react-icons/fi";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: <FiHome />, label: "Home" },
    { to: "/about", icon: <FiUser />, label: "About" },
    { to: "/projects", icon: <FiFolder />, label: "Projects" },
    { to: "/skills", icon: <FiAward />, label: "Skills" },
    { to: "/contact", icon: <FiMail />, label: "Contact" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full px-6 py-3 flex gap-6 z-50">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex flex-col items-center text-sm ${
            location.pathname === item.to ? "text-blue-600 font-bold" : "text-gray-600"
          }`}
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
