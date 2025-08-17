import { FiDownload } from "react-icons/fi";

const Header = ({ isHome }) => {
  return (
    <header className={`w-full px-5 py-3 flex justify-between items-center
    ${isHome ? `bg-gray-900 text-white` : `bg-white text-black`}`}>
      <div className="flex items-center gap-2">
        <span className="relative w-3 h-3 rounded-full bg-green-600 animate-pulse"></span>
        <h5 className="font-bold text-lg font-sans">Open to work</h5>
      </div>
      <button className="relative px-4 py-2 bg-blue-400 rounded-md text-black font-semibold text-base font-sans overflow-hidden flex items-center justify-center gap-2 group min-w-[140px]">
        <span className="group-hover:opacity-0 transition-opacity duration-300">Download CV</span>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FiDownload />
        </span>
      </button>
    </header>
  );
};

export default Header;


