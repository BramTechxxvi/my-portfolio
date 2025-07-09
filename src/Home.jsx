import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Home.css"

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <main className="mainContainer">
                <h2>BACK-END SOFTWARE ENGINEER / TECH ENTHUSIAST</h2>
                <h1>Ibrahim Ibrahim Babatunde</h1>
            </main>
            <Footer />
        </div>
    );
}


export default Home;