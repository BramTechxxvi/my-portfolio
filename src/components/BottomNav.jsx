import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiFolder, FiAward, FiMail} from 'react-icons/fi';

const BottomNav = () => {
    const location = useLocation();

    const navItems =[
        { to: "/", icon: <FiHome />, label: "Home" },
        { to: "/", icon: <FiHome />, label: "About" },
        { to: "/", icon: <FiHome />, label: "Projects" },
        { to: "/", icon: <FiHome />, label: "Skills" },
        { to: "/", icon: <FiHome />, label: "Contact" },      
    ]
    return (
        <nav className='fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full px-6 py-3 gap-6 z-50'>
            {navItems.map((item)=> {
                <Link
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center`}></Link>
            })}
        </ nav>    
    );
};

export default BottomNav