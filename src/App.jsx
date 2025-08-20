import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home.jsx';
import Layout from './components/Layout.jsx';
import './index.css'
import Contact from './components/Contact.jsx';
import HeroSection from './components/HeroSection.jsx';
import About from './components/About.jsx'
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout />}> 

  <Route index element={<HeroSection />} />
  <Route path='about' element={<About />} />
  <Route path='projects' element={<Projects/>} />
  <Route path='skills' element={<Skills/>} />
  <Route path='contact' element={<Contact/>} />


        <Route path="*" element={<h1 className="text-center mt-20 text-2xl">Page Not Found</h1>} />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;