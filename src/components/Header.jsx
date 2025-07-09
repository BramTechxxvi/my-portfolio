import "./Header.css";

const Header = ()=> {
    return (
        <header className="header">
            <section className="headerContainer">
                <h1>Ibrahim Ibrahim Babatunde</h1>
                <p>Back-End Software Engineer / Tech Enthusiast</p>
            </section>
            <img src=".\public\android-chrome-192x192.png" alt="Ibrahim" className="profile-image" />
        </header>
    );
}

export default Header;