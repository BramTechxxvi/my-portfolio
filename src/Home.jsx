import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Home.css"

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <main className="mainContainer">
                <div className="contentWrapper">
                    <div className="name">
                        <h2>BACK-END/SOFTWARE ENGINEER</h2>
                        <h1>Ibrahim Ibrahim</h1>
                    </div>
                    <div className="info">
                        <h6></h6>
                        <h6></h6>
                        <h6></h6>
                        <h6></h6>

                    </div>

                </div>
                <div className="imageWrapper">
                    <img src="/that.png" alt="profile-image" />
                </div>
            </main>
            <Footer />
        </div>
    );
}


export default Home;