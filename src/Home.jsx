import Footer from "./components/Footer";

const Home = () => {
    return (
        <div className="App">
        <div className="overlay"></div>
        <Header />
        <main>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
        <Footer />
        </div>
    );
    }

    export default Home;