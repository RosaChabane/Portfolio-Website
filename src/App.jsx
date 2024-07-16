import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ScrollingSkillCards from './components/ScrollingSkillCards';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SkillsProgress from './components/SkillsProgress';

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
      <section id="progress">
        <SkillsProgress />
      </section>
      {/* <section id="skills">
        <ScrollingSkillCards />
      </section> */}
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
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
