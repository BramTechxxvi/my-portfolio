import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<h1 className="text-center mt-20 text-2xl">Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;