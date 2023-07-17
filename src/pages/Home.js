import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
