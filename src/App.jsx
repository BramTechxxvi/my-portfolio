  //  import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

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
   