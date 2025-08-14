import "./Home.css"
import HeroSection from "./components/HeroSection";

const Home = () => {
    return (
        <div className="Home">
            <main className="mainWrapper">
                <HeroSection />
            </main>
        </div>
    );
}

export default Home;