   import React from 'react';
   import './App.css';

   function App() {
     return (
       <div className="App">
         <header className="App-header">
           <h1>Your Name</h1>
           <h2>Web Developer</h2>
           <img src="" alt="Profile" className="profile-pic" />
         </header>
         <main>
           <section>
             <h3>About Me</h3>
             <p>
               Write a brief introduction about yourself, your skills, and your interests.
             </p>
           </section>
           <section>
             <h3>Projects</h3>
             <ul>
               <li>
                 <a href="">Project 1</a> - Description of project 1.
               </li>
               <li>
                 <a href="">Project 2</a> - Description of project 2.
               </li>
               <li>
                 <a href="">Project 3</a> - Description of project 3.
               </li>
             </ul>
           </section>
           <section>
             <h3>Contact</h3>
             <p>Email: your.email@example.com</p>
           </section>
         </main>
       </div>
     );
   }

   export default App;
   