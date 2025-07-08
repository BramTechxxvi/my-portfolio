  //  import React from 'react';
   import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';

   function App() {
     return (
       <div className="App">
        <Header />
        <main>
          <About />
          <Projects />
        </main>
        <Footer />
       </div>
     );
   }

   export default App;
   