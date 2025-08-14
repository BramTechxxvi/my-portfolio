import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Header isHome={isHome} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
      
      <Footer isHome={isHome} />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;






import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Home';
// import About from './About'; // add more pages as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App
