import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import './index.css';

const App = ()=> {
  return (
    <Router>
      <Routes>

        <Route index element={<Home />} />
        <Route path="*" element={<} />
      
      </Routes>
    </Router>
  );
}

export default App