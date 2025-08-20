import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Layout from './components/Layout.jsx';
import './index.css'
import Contact from './components/Contact.jsx';
import HeroSection from './components/HeroSection.jsx';

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


          </Route>

        </Routes>
      </Router>
    );
  }

   export default App;