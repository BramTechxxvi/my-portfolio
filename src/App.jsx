import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import './App.css';
import './index.css'


   function App() {
     return (
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
        </Router>
     );
   }

   export default App;
   