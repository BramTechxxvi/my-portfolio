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
                </div>
            </main>
            <Footer />
        </div>
    );
}


export default Home;