import Header from "./components/Header";
import Footer from "./components/Footer";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import "./Home.css"
import HeroSection from "./components/HeroSection";

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <main className="mainWrapper">
                <div className="mainContainer">
                    <HeroSection />
                    <div className="contentWrapper">
                        <div className="name">
                            <h2>BACK-END/SOFTWARE ENGINEER</h2>
                            <h1>Ibrahim Ibrahim</h1>
                        </div>
                        <div className="info">
                            <h4 ><FiMail />  bramtechxxvi@gmail.com</h4>
                            <h4><FiPhone/>  +234-701-717-5172</h4>
                            <h4><FiLinkedin />  my-linkedIn</h4>
                            <h4><FiMapPin />   Lagos, Nigeria</h4>
                            <h4><FiGithub />   my-gitHubLink</h4>
                        </div>
                    </div>
                    <div className="imageWrapper">
                        <img src="/that.png" alt="profile-image" />
                    </div>
                </div>
                <div className="see">
                                        
                </div>
            </main>
            <Footer />
        </div>
    );
}


export default Home;