import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <main className="flex-1 w-full">
                <section id="hero"><HeroSection /></section>
                <section id="about"><About /></section>
                <section id="projects"><Projects /></section>
                <section id="skills"><Skills /></section>
                <section id="contact"><Contact /></section>
            </main>
        </div>
    );
}

export default Home;