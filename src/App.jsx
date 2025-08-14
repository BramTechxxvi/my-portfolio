import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Layout from './components/Layout.jsx';
import './index.css'

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    );
  }

   export default App;