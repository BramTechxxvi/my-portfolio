import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1 className="text-center mt-20 text-2xl">Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;