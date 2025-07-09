import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './Home';
import './App.css';

   function App() {
     return (
        <Router>
          <div className="App">
            <div className="overlay"></div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
     );
   }

   export default App;
   