import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import BottomNav from "./components/BottomNav";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <Contact/>
            </main>
        </div>
    );
}

export default Home;