import HeroSection from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';


import BottomNav from './components/BottomNav.jsx';

const MainPage = () => (
  <div className="flex flex-col min-h-screen w-full">
    <main className="flex-1 w-full">
      <section id="hero"><HeroSection /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </main>
    <BottomNav />
  </div>
);

export default MainPage;
