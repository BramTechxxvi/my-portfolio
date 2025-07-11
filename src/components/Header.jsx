import "./Header.css";
import { FiDownload } from "react-icons/fi";

const Header = ()=> {
    return (
        <header className="header">
            <section className="headerContainer">
                <div className="status">
                    <span className="onlineDot"></span>
                    <h5>Open to work</h5>
                </div>

                <button className="downloadBtn" onClick={() => window.open("")}>
                    <div className="downloadBtn-content">
                        <span className="downloadBtn-text">Download CV</span>
                        <span className="downloadBtn-icon"><FiDownload /></span>
                    </div>
                </button>
            </section>
        </header>
    );
}

export default Header;