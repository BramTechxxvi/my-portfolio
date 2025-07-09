import "./Header.css";

const Header = ()=> {
    return (
        <header className="header">
            <section className="headerContainer">
                <div className="status">
                    <span className="onlineDot"></span>
                    <h5>Open to work</h5>
                </div>

                <button className="downloadBtn">
                    <span className="downloadBtn-text">Download CV</span>
                    <span className="downloadBtn-icon"></span>
                </button>
            </section>
        </header>
    );
}

export default Header;