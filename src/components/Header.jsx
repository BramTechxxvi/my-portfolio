import { FiDownload } from "react-icons/fi";    
import './Header.css';

const Header = () => {
  return (
    <header className="header">
        <div className="headerContainer">
            <div className="status">
                <span className="onlineDot"></span>
                <h5>Open to work</h5>
            </div>
            <button className="downloadBtn">
                <div className="downloadBtn-content">
                    <span className="downloadBtn-text">Download CV</span>
                    <span className="downloadBtn-icon"><FiDownload /></span>
                </div>
            </button>


        </div>
    </header>
  )
}

export default Header;