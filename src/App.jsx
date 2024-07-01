import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import About from './components/About';
import ScrollingSkillCards from './components/ScrollingSkillCards';

const App = () => {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <ScrollingSkillCards />
      </section>
      {/* <section id="projects">
        <HomeCards />
      </section> */}
      {/* <section id="contact">
        <Contact />
      </section> */}
    </>
  );
}

export default App;
