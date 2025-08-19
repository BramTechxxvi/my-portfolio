import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home */}
          <Route index element={<HeroSection />} />

          {/* Other pages */}
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />

          {/* 404 Fallback */}
          <Route path="*" element={<h1 className="text-center mt-20 text-2xl">Page Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;




