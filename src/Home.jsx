import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Home.css"
import HeroSection from "./components/HeroSection";

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <main className="mainWrapper">
                <HeroSection />
            </main>
            <Footer />
        </div>
    );
}

export default Home;