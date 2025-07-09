  //  import React from 'react';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './Home';
import './App.css';

   function App() {
     return (
       <div className="App">
        <div className="overlay"></div>
        <main>
          <Home />
          <Contact />
        </main>
        <Footer />
       </div>
     );
   }

   export default App;
   