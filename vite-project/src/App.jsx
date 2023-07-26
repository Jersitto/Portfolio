import React from 'react';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Contact from './Components/ContactMe/ContactME';

function App() {
  return (
    <div className='min-h-screen bg-slate-600'>
      <Header />
      <main className="container mx-auto">
        <AboutMe />
        <Contact />
        <Projects />
      </main>
    </div>
  );
}

export default App;