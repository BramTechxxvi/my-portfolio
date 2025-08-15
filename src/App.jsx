import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Layout from './components/Layout.jsx';
import './index.css'
import Contact from './components/Contact.jsx';

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index element={<Contact /> } />
          </Route>
        </Routes>
      </Router>
    );
  }

   export default App;